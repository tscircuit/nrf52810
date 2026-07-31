import { ABS07_32_768KHZ_9_T } from "./imports/ABS07_32_768KHZ_9_T"
import { MY_2032_16 } from "./imports/MY_2032_16"
import { NRF52810_QFAA_R } from "./imports/NRF52810_QFAA_R"
import { RFANT3216120A5T } from "./imports/RFANT3216120A5T"
import { X201632MKB4SI } from "./imports/X201632MKB4SI"

const PcbCap = ({
  name,
  capacitance,
  footprint = "0402",
  pcbX,
  pcbY,
  pcbRotation,
  schX,
  schY,
  doNotPlace = false,
}: {
  name: string
  capacitance: string
  footprint?: string
  pcbX: number
  pcbY: number
  pcbRotation?: number
  schX: number
  schY: number
  doNotPlace?: boolean
}) => (
  <capacitor
    name={name}
    capacitance={capacitance}
    footprint={footprint}
    pcbX={pcbX}
    pcbY={pcbY}
    pcbRotation={pcbRotation}
    schX={schX}
    schY={schY}
    doNotPlace={doNotPlace}
  />
)

export default () => (
  <board
    name="NRF52810_COINCELL_TRACKER"
    title="nRF52810 CR2032 BLE Tracker"
    width="30mm"
    height="30mm"
    borderRadius="2mm"
    thickness="1.0mm"
    layers={2}
    solderMaskColor="black"
    silkscreenColor="white"
    doubleSidedAssembly
    autorouter={{ preset: "auto_local", allowViaInPad: true, traceClearance: "0.15mm" }}
  >
    <NRF52810_QFAA_R name="U1" pcbX={2.0} pcbY={3.5} schX={0} schY={0} />

    <MY_2032_16
      name="BT1"
      layer="bottom"
      pcbX={0}
      pcbY={-1.5}
      schX={-32}
      schY={18}
    />

    <X201632MKB4SI
      name="X1"
      pcbX={4.0}
      pcbY={8.6}
      pcbRotation={90}
      schX={28}
      schY={8}
    />
    <PcbCap name="C1" capacitance="12pF" pcbX={0.8} pcbY={9.9} schX={38} schY={12} />
    <PcbCap name="C2" capacitance="12pF" pcbX={7.2} pcbY={9.9} schX={38} schY={4} />

    <ABS07_32_768KHZ_9_T
      name="X2"
      pcbX={-4.2}
      pcbY={5.1}
      schX={28}
      schY={-10}
    />
    <PcbCap name="C11" capacitance="12pF" pcbX={-6.6} pcbY={6.9} schX={38} schY={-6} />
    <PcbCap name="C12" capacitance="12pF" pcbX={-6.6} pcbY={3.3} schX={38} schY={-14} />

    <PcbCap name="C4" capacitance="100nF" pcbX={-2.0} pcbY={8.7} schX={-18} schY={18} />
    <PcbCap name="C5" capacitance="100nF" pcbX={-2.8} pcbY={6.8} schX={-18} schY={10} />
    <PcbCap name="C7" capacitance="100pF" pcbX={6.7} pcbY={4.3} schX={-18} schY={2} />
    <PcbCap name="C8" capacitance="100nF" pcbX={6.6} pcbY={5.8} schX={-18} schY={-6} />
    <PcbCap name="C9" capacitance="4.7uF" footprint="0603" pcbX={-4.6} pcbY={8.8} schX={-31} schY={10} />
    <PcbCap name="C10" capacitance="1uF" footprint="0603" pcbX={0.7} pcbY={8.0} schX={-18} schY={-14} />

    <inductor
      name="L1"
      inductance="3.9nH"
      footprint="0402"
      pcbX={6.7}
      pcbY={3.3}
      schX={28}
      schY={-25}
    />
    <PcbCap
      name="C3"
      capacitance="0.8pF"
      pcbX={6.7}
      pcbY={1.9}
      schX={22}
      schY={-31}
    />

    <inductor
      name="L2"
      inductance="6.8nH"
      footprint="0402"
      pcbX={9.0}
      pcbY={3.3}
      schX={38}
      schY={-25}
    />
    <PcbCap
      name="C13"
      capacitance="0.5pF"
      pcbX={9.0}
      pcbY={1.5}
      schX={34}
      schY={-31}
      doNotPlace
    />
    <PcbCap
      name="C14"
      capacitance="0.5pF"
      pcbX={10.8}
      pcbY={-0.4}
      schX={44}
      schY={-31}
      doNotPlace
    />
    <RFANT3216120A5T
      name="ANT1"
      pcbX={13.0}
      pcbY={3.3}
      schX={49}
      schY={-25}
    />

    <testpoint
      name="TP_VDD"
      footprintVariant="pad"
      padShape="circle"
      padDiameter="1.6mm"
      pcbX={-5.0}
      pcbY={-12.5}
      schX={-34}
      schY={-16}
    />
    <testpoint
      name="TP_SWDIO"
      footprintVariant="pad"
      padShape="circle"
      padDiameter="1.6mm"
      pcbX={-2.5}
      pcbY={-12.5}
      schX={-24}
      schY={-20}
    />
    <testpoint
      name="TP_GND"
      footprintVariant="pad"
      padShape="circle"
      padDiameter="1.6mm"
      pcbX={0}
      pcbY={-12.5}
      schX={-34}
      schY={-24}
    />
    <testpoint
      name="TP_SWDCLK"
      footprintVariant="pad"
      padShape="circle"
      padDiameter="1.6mm"
      pcbX={2.5}
      pcbY={-12.5}
      schX={-24}
      schY={-28}
    />
    <testpoint
      name="TP_RESET"
      footprintVariant="pad"
      padShape="circle"
      padDiameter="1.6mm"
      pcbX={5.0}
      pcbY={-12.5}
      schX={-34}
      schY={-32}
    />

    <trace from=".BT1 > .VBAT_P1" to="net.VBAT" width="0.15mm" />
    <trace from=".BT1 > .VBAT_P2" to="net.VBAT" width="0.15mm" />
    <trace from=".BT1 > .VBAT_N" to="net.GND" width="0.15mm" />

    <trace from=".U1 > .VDD1" to="net.VBAT" width="0.15mm" />
    <trace from=".U1 > .VDD2" to="net.VBAT" width="0.15mm" />
    <trace from=".U1 > .VDD3" to="net.VBAT" width="0.15mm" />
    <trace from=".U1 > .VSS1" to="net.GND" width="0.15mm" />
    <trace from=".U1 > .VSS2" to="net.GND" width="0.15mm" />
    <via
      name="VIA_EP_GND"
      pcbX={2.0}
      pcbY={3.5}
      holeDiameter="0.3mm"
      outerDiameter="0.6mm"
      connectsTo={[".U1 > .EP", "net.GND"]}
    />

    <trace from=".C4 > .pin1" to="net.VBAT" width="0.15mm" />
    <trace from=".C4 > .pin2" to="net.GND" width="0.15mm" />
    <trace from=".C9 > .pin1" to="net.VBAT" width="0.15mm" />
    <trace from=".C9 > .pin2" to="net.GND" width="0.15mm" />
    <trace from=".U1 > .DEC1" to=".C5 > .pin1" width="0.15mm" />
    <trace from=".C5 > .pin2" to="net.GND" width="0.15mm" />
    <trace from=".U1 > .DEC2" to=".C7 > .pin1" width="0.15mm" />
    <trace
      from=".U1 > .DEC3"
      to=".C8 > .pin1"
      width="0.15mm"
      pcbRouteHints={[
        { x: 5.75, y: 4.5 },
        { x: 5.75, y: 5.8 },
      ]}
    />
    <via
      name="VIA_C7_GND"
      pcbX={7.21}
      pcbY={4.3}
      holeDiameter="0.2mm"
      outerDiameter="0.35mm"
      connectsTo={[".C7 > .pin2", "net.GND"]}
    />
    <via
      name="VIA_C8_GND"
      pcbX={7.11}
      pcbY={5.8}
      holeDiameter="0.2mm"
      outerDiameter="0.35mm"
      connectsTo={[".C8 > .pin2", "net.GND"]}
    />
    <trace from=".U1 > .DEC4" to=".C10 > .pin1" width="0.15mm" />
    <trace from=".C10 > .pin2" to="net.GND" width="0.15mm" />

    <trace from=".U1 > .XC1" to=".X1 > .XTAL1" width="0.15mm" maxLength="12mm" />
    <trace from=".U1 > .XC2" to=".X1 > .XTAL2" width="0.15mm" maxLength="12mm" />
    <trace from=".X1 > .GND1" to="net.GND" width="0.15mm" />
    <trace from=".X1 > .GND2" to="net.GND" width="0.15mm" />
    <trace from=".X1 > .XTAL1" to=".C1 > .pin1" width="0.15mm" />
    <trace from=".C1 > .pin2" to="net.GND" width="0.15mm" />
    <trace from=".X1 > .XTAL2" to=".C2 > .pin1" width="0.15mm" />
    <trace from=".C2 > .pin2" to="net.GND" width="0.15mm" />

    <trace from=".U1 > .XL1" to=".X2 > .OSC1" width="0.15mm" maxLength="10mm" />
    <trace from=".U1 > .XL2" to=".X2 > .OSC2" width="0.15mm" maxLength="10mm" />
    <trace from=".X2 > .OSC1" to=".C11 > .pin1" width="0.15mm" />
    <trace from=".C11 > .pin2" to="net.GND" width="0.15mm" />
    <trace from=".X2 > .OSC2" to=".C12 > .pin1" width="0.15mm" />
    <trace from=".C12 > .pin2" to="net.GND" width="0.15mm" />

    <trace from=".U1 > .ANT" to=".L1 > .pin1" width="0.18mm" maxLength="4mm" />
    <trace
      from=".L1 > .pin1"
      to=".C3 > .pin1"
      width="0.18mm"
      maxLength="4mm"
      pcbStraightLine
    />
    <via
      name="VIA_C3_GND"
      pcbX={7.21}
      pcbY={1.9}
      holeDiameter="0.2mm"
      outerDiameter="0.35mm"
      connectsTo={[".C3 > .pin2", "net.GND"]}
    />
    <trace from=".L1 > .pin2" to=".L2 > .pin1" width="0.5mm" maxLength="5mm" />
    <trace from=".L1 > .pin2" to=".C13 > .pin1" width="0.18mm" maxLength="8mm" />
    <trace from=".C13 > .pin2" to="net.GND" width="0.15mm" maxLength="5mm" />
    <trace from=".L2 > .pin2" to=".ANT1 > .FEED" width="0.5mm" maxLength="12mm" />
    <trace from=".L2 > .pin2" to=".C14 > .pin1" width="0.5mm" maxLength="12mm" />
    <trace from=".C14 > .pin2" to="net.GND" width="0.15mm" maxLength="5mm" />

    <trace from=".U1 > .SWDIO" to=".TP_SWDIO > .pin1" width="0.15mm" />
    <trace from=".U1 > .SWDCLK" to=".TP_SWDCLK > .pin1" width="0.15mm" />
    <trace from=".U1 > .nRESET" to=".TP_RESET > .pin1" width="0.15mm" />
    <trace from=".TP_VDD > .pin1" to="net.VBAT" width="0.15mm" />
    <trace from=".TP_GND > .pin1" to="net.GND" width="0.15mm" />

    <copperpour
      name="TOP_GND"
      layer="top"
      connectsTo="net.GND"
      clearance="0.2mm"
      boardEdgeMargin="0.25mm"
      outline={[
        { x: -14.5, y: -14.5 },
        { x: 14.5, y: -14.5 },
        { x: 14.5, y: 0.5 },
        { x: 10.2, y: 0.5 },
        { x: 10.2, y: 6.2 },
        { x: 14.5, y: 6.2 },
        { x: 14.5, y: 14.5 },
        { x: -14.5, y: 14.5 },
      ]}
    />
    <copperpour
      name="BOTTOM_GND"
      layer="bottom"
      connectsTo="net.GND"
      clearance="0.2mm"
      boardEdgeMargin="0.25mm"
      outline={[
        { x: -14.5, y: -14.5 },
        { x: 14.5, y: -14.5 },
        { x: 14.5, y: 0.5 },
        { x: 10.2, y: 0.5 },
        { x: 10.2, y: 6.2 },
        { x: 14.5, y: 6.2 },
        { x: 14.5, y: 14.5 },
        { x: -14.5, y: 14.5 },
      ]}
    />

    <silkscreentext text="nRF52810 TRACKER" pcbX={-5} pcbY={-10} fontSize="0.8mm" />
    <silkscreentext text="RF KEEP CLEAR" pcbX={11.7} pcbY={6.8} fontSize="0.55mm" />
    <silkscreentext text="V D G C R" pcbX={0} pcbY={-14} fontSize="0.55mm" />
  </board>
)
