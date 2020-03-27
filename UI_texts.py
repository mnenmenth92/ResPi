import json

texts_dict = {
    "lumbar_forward": "Lumbar is going forward",
    "lumbar_forward_finished": "Lumbar is full",
    "lumbar_reward": "Lumbar is going reward",
    "lumbar_reward_finished": "Lumbar is empty",
    "lumbar_up": "Lumbar is going up",
    "lumbar_up_finished": "Max. pressure reached",
    "lumbar_down": "Lumbar is going bottom",
    "lumbar_down_finished": "Max. pressure reached",
    "mssg_runs_info": "Massage is running",
    "view_change_info": "Please stop massage to change view",
    "list_info": "Please stop massage to expand the list",
    "one_bladder_inflate_start": "Bolster inflating",
    "one_bladder_deflate_start": "Bolster deflating",
    "one_bladder_inflate_finished": "Max inflate",
    "one_bladder_deflate_finished": "Max deflate",
    "optivent_button_text" : "RUN OPTIVENT",
    "optivent_is_running": "Optivent is Running",

}


texts_json = json.dumps(texts_dict)
