/**
 * Functions to ManaBot
 */
//% weight=0 color=#b51622 icon="\uf19d"
//% groups=['Motor']
namespace ManaBot {
  // Servo motor pins
  let pin_left_wheel = AnalogPin.P9
  let pin_right_wheel = AnalogPin.P8

  /**
   * Initialization ManaBot car
   * @param left describe parameter here, eg: AnalogPin.P1
   * @param right describe parameter here, eg: AnalogPin.P2
   */
  //% weight=99
  //% block="set left wheel at pin %left|right wheel at pin %right"
  //% left.fieldEditor="gridpicker" left.fieldOptions.columns=3
  //% right.fieldEditor="gridpicker" right.fieldOptions.columns=3
  //% group="Motor"
  export function initWheel(left: AnalogPin, right: AnalogPin): void {
    // Add code here
    pin_left_wheel = left
    pin_right_wheel = right
  }

  /**
   * Move forward for a specified duration in seconds
   */
  //% weight=9
  //% block="move forward for %time s"
  //% time.min=1 time.max=60
  //% group="Motor"
  export function moveForward(time: number): void {
    pins.servoSetPulse(pin_right_wheel, 850)
    pins.servoSetPulse(pin_left_wheel, 2300)
    basic.pause(time * 1000)
  }

  /**
   * Move backward for a specified duration in seconds
   */
  //% weight=8
  //% block="move backward for %time s"
  //% time.min=1 time.max=60
  //% group="Motor"
  export function moveBackward(time: number): void {
    pins.servoSetPulse(pin_right_wheel, 2300)
    pins.servoSetPulse(pin_left_wheel, 850)
    basic.pause(time * 1000)
  }

  /**
   * Turn left for a specified duration in seconds
   */
  //% weight=7
  //% block="turn left for %time s"
  //% time.min=1 time.max=60
  //% group="Motor"
  export function turnLeft(time: number): void {
    pins.servoSetPulse(pin_right_wheel, 700)
    pins.servoSetPulse(pin_left_wheel, 1500)
    basic.pause(time * 1000)
  }

  /**
   * Turn right for a specified duration in seconds
   */
  //% weight=6
  //% block="turn right for %time s"
  //% time.min=1 time.max=60
  //% group="Motor"
  export function turnRight(time: number): void {
    pins.servoSetPulse(pin_right_wheel, 1500)
    pins.servoSetPulse(pin_left_wheel, 2300)
    basic.pause(time * 1000)
  }

  /**
   * Stop moving
   */
  //% weight=5
  //% block="stop moving"
  //% group="Motor"
  export function stopMoving(): void {
    pins.servoSetPulse(pin_right_wheel, 1500)
    pins.servoSetPulse(pin_left_wheel, 1500)
    basic.pause(1000)
    pins.servoSetPulse(pin_right_wheel, 0)
    pins.servoSetPulse(pin_left_wheel, 0)
  }
}
