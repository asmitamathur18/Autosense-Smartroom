# IoT Smart Room - Dummy Python Code
# This code simulates sensor readings and device control
# Written for demonstration & GitHub upload (no Firebase)

import time
import random

# Simulated sensors
def read_temperature():
    return random.randint(22, 35)

def read_humidity():
    return random.randint(40, 80)

# Simulated devices
fan_state = False
light_state = False

def turn_fan_on():
    global fan_state
    fan_state = True
    print("Fan: ON")

def turn_fan_off():
    global fan_state
    fan_state = False
    print("Fan: OFF")

def turn_light_on():
    global light_state
    light_state = True
    print("Light: ON")

def turn_light_off():
    global light_state
    light_state = False
    print("Light: OFF")

print("Smart Room System Started\n")

while True:
    temp = read_temperature()
    hum = read_humidity()

    print("Temperature:", temp, "°C")
    print("Humidity:", hum, "%")

    # Automatic control logic
    if temp > 30:
        turn_fan_on()
    else:
        turn_fan_off()

    if hum < 50:
        turn_light_on()
    else:
        turn_light_off()

    print("-------------------------")
    time.sleep(3)
