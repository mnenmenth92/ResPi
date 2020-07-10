from config import (
    TV_values,
    TV_inflate_times,
    AC_values,
    ac_rate_bottom_limit,
    ac_rate_top_limit,
    tv_rate_bottom_limit,
    tv_rate_top_limit,
    rate_step

)

class global_data:
    def __init__(self, sio):
        # TV
        self.TV_values = TV_values
        self.TV_infalte_times = TV_inflate_times
        self.tv_index = 1
        self.tv_value = self.TV_values[self.tv_index]
        self.tv_rate = tv_rate_bottom_limit
        self.tv_rate_bottom_limit = tv_rate_bottom_limit
        self.tv_rate_top_limit = tv_rate_top_limit

        # AC
        self.AC_values = AC_values
        self.ac_index = 1
        self.ac_value = self.AC_values[self.ac_index]
        self.ac_rate = ac_rate_bottom_limit
        self.ac_rate_bottom_limit = ac_rate_bottom_limit
        self.ac_rate_top_limit = ac_rate_top_limit

        # common
        self.inflation_time = 0
        self.deflation_time = 0
        self.rate_step = rate_step
        self.sequence_type = 'idle'

        # frontend connection
        self.sio = sio
        self.sio.emit('ac_value', self.ac_value)
        self.sio.emit('tv_value', self.tv_value)
        self.sio.emit('ac_rate', self.ac_rate)
        self.sio.emit('tv_rate', self.tv_rate)


    # next AC mode value
    def inc_ac(self):
        if self.ac_index < len(self.AC_values):
            self.ac_index += 1
            self.ac_value = self.AC_values[self.ac_index]
            self.sio.emit('ac_value', self.ac_value)

    # previous AC mode value
    def dec_ac(self):
        if self.ac_index > 1:
            self.ac_index -= 1
            self.ac_value = self.AC_values[self.ac_index]
            self.sio.emit('ac_value', self.ac_value)

    # next TV mode value
    def inc_tv(self):
        if self.tv_index < len(self.TV_values):
            self.tv_index += 1
            self.tv_value = self.TV_values[self.tv_index]
            self.sio.emit('tv_value', self.tv_value)

    # previous TV mode value
    def dec_tv(self):
        if self.tv_index > 1:
            self.tv_index -= 1
            self.tv_value = self.TV_values[self.tv_index]
            self.sio.emit('tv_value', self.tv_value)

    # next ac mode rate
    def inc_ac_rate(self):
        if self.ac_rate < self.ac_rate_top_limit:
            self.ac_rate += self.rate_step
            self.sio.emit('ac_rate', self.ac_rate)

    # previous ac mode rate
    def dec_ac_rate(self):
        if self.ac_rate > self.ac_rate_bottom_limit:
            self.ac_rate -= self.rate_step
            self.sio.emit('ac_rate', self.ac_rate)

    # next tv mode rate
    def inc_tv_rate(self):
        if self.tv_rate < self.tv_rate_top_limit:
            self.tv_rate += self.rate_step
            self.sio.emit('tv_rate', self.tv_rate)

    # previous tv mode rate
    def dec_tv_rate(self):
        if self.tv_rate > self.tv_rate_bottom_limit:
            self.tv_rate -= self.rate_step
            self.sio.emit('tv_rate', self.tv_rate)


    # calculate on and off time for AC mode
    def calc_AC_times(self):
        period = 60/self.ac_value
        self.inflation_time = period * self.ac_rate/100
        self.deflation_time = period - self.inflation_time

    # calculate on and off time for TV mode
    def calc_TV_times(self):
        self.inflation_time = self.TV_infalte_times[self.tv_index]
        self.deflation_time = self.inflation_time - self.inflation_time * self.tv_rate/100







