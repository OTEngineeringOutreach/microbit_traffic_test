/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */
//% color=#003C71 weight=100 
namespace hello {
    let redPin: DigitalPin = DigitalPin.P0
    let yellowPin: DigitalPin = DigitalPin.P1
    let greenPin: DigitalPin = DigitalPin.P2
    //% block
    //% pin.shadow="pinPicker"
    export function setRedPin(pin: DigitalPin): void {
        redPin = pin
    }
    //% block
    //% pin.shadow="pinPicker"
    export function setYellowPin(pin: DigitalPin): void {
        yellowPin = pin
    }
    //% block
    //% pin.shadow="pinPicker"
    export function setGreenPin(pin: DigitalPin): void {
        greenPin = pin
    }
    //% block
    export function redLightOn(): void {
        pins.digitalWritePin(redPin, 1)
    }
    //% block
    export function redLightOff(): void {
        pins.digitalWritePin(redPin, 0)
    }
    //% block
    export function yellowLightOn(): void {
        pins.digitalWritePin(yellowPin, 1)
    }
    //% block
    export function yellowLightOff(): void {
        pins.digitalWritePin(yellowPin, 0)
    }
    //% block
    export function greenLightOn(): void {
        pins.digitalWritePin(greenPin, 1)
    }
    //% block
    export function greenLightOff(): void {
        pins.digitalWritePin(greenPin, 0)
    }
}
