import RPi.GPIO as GPIO
from config import fan_pin
import time

class FanDriver:

    def __init__(self, global_data):
        self.state = "high"
        self.loop_started = time.time()
        self.current_state = False
        self.fan_pin = fan_pin
        self.GPIO = GPIO
        self.GPIO.setmode(self.GPIO.BOARD)
        self.GPIO.setup(self.fan_pin, self.GPIO.OUT)
        # time config
        self.time_on = 1
        self.time_off = 1
        # global data
        self.global_data = global_data

    # select on and off times
    def calc_times(self):
        sequence_type = self.global_data.sequence_type
        if sequence_type == 'ac':
            self.global_data.calc_AC_times()
        elif sequence_type == 'tv':
            self.global_data.calc_TV_times()

    # update on, off times
    def update_times(self):
        self.calc_times()
        self.time_on = self.global_data.inflation_time
        self.time_off = self.global_data.deflation_time
        print('time on: ' + str(self.time_on) + '\ntime off: ' + str(self.time_off))

    # set gpio pin
    def set_state(self, boolean_value):
        self.current_state = boolean_value
        if boolean_value:
            self.GPIO.output(self.fan_pin, self.GPIO.HIGH)
        else:
            self.GPIO.output(self.fan_pin, self.GPIO.LOW)

    # runs action loop
    def run_in_loop(self):
        # loop run flag
        self.current_state = True

        # get global data
        self.update_times()


        # loop init state
        self.set_state(True)

        while self.current_state:
            if self.state == 'low':
                timer = time.time() - self.loop_started
                if timer > self.time_off:
                    # switch to high and reset timer
                    self.set_state(True)
            elif self.state == 'high':
                timer = time.time() - self.loop_started
                if timer > self.time_on:
                    # switch to on and reset timer
                    if self.time_off != 0:
                        self.set_state(False)
            time.sleep(0.1)

    # stops loop
    def stop_loop(self):
        self.current_state = False
        self.GPIO.output(self.fan_pin, self.GPIO.LOW)

    # 
    def set_state(self, boolean_state):
        if boolean_state:
            print('DO state: HIGH')
            self.GPIO.output(self.fan_pin, self.GPIO.HIGH)
            self.loop_started = time.time()
            self.state = 'high'
        else:
            print('DO state: LOW')
            self.GPIO.output(self.fan_pin, self.GPIO.LOW)
            self.loop_started = time.time()
            self.state = 'low'



