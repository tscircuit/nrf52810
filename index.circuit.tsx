import { ABS07_32_768KHZ_9_T } from "./imports/ABS07_32_768KHZ_9_T";
import { AO3401A } from "./imports/AO3401A";
import { BAT54HT1G } from "./imports/BAT54HT1G";
import { BM05B_SRSS_TB_LF__SN_ } from "./imports/BM05B_SRSS_TB_LF__SN_";
import { E6C0606RGBC3UDA } from "./imports/E6C0606RGBC3UDA";
import { MCP1700T_3302E_TT } from "./imports/MCP1700T_3302E_TT";
import { MY_2032_16 } from "./imports/MY_2032_16";
import { NRF52810_QFAA_R } from "./imports/NRF52810_QFAA_R";
import { RFANT3216120A5T } from "./imports/RFANT3216120A5T";
import { TYPE_C_31_M_12 } from "./imports/TYPE_C_31_M_12";
import { X201632MKB4SI } from "./imports/X201632MKB4SI";

const CORE_SHEET = "core-power";
const INTERFACE_SHEET = "usb-led";
const CLOCK_SHEET = "clocks";
const RF_SHEET = "rf-front-end";
const CLOCK_SHEET_Y = 4;
const RF_SHEET_Y = -2;

const POWER_INPUT_SECTION = "power-input";
const MCU_POWER_SECTION = "mcu-power";
const PROGRAMMING_SECTION = "programming";
const USB_INPUT_SECTION = "usb-input";
const POWER_MUX_SECTION = "power-mux";
const STATUS_LED_SECTION = "status-led";
const HF_CLOCK_SECTION = "hf-clock";
const LF_CLOCK_SECTION = "lf-clock";
const RF_MATCH_SECTION = "rf-match";
const ANTENNA_SECTION = "antenna";

const HIDE_FOOTPRINT_TEXT = {
  "& silkscreentext": { visibility: "hidden" as const },
};

const PcbCap = ({
  name,
  capacitance,
  footprint = "0402",
  pcbX,
  pcbY,
  pcbRotation,
  schX,
  schY,
  schSectionName,
  doNotPlace = false,
}: {
  name: string;
  capacitance: string;
  footprint?: string;
  pcbX: number;
  pcbY: number;
  pcbRotation?: number;
  schX: number;
  schY: number;
  schSectionName: string;
  doNotPlace?: boolean;
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
    schOrientation="vertical"
    schSectionName={schSectionName}
    doNotPlace={doNotPlace}
  />
);

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
    isViaInPadAllowed={false}
    schLayout={{ layoutMode: "relative" }}
    autorouter={{
      preset: "auto_local",
      allowViaInPad: false,
      traceClearance: "0.15mm",
    }}
  >
    <NRF52810_QFAA_R
      name="U1"
      pcbX={2.0}
      pcbY={3.5}
      noSchematicRepresentation
    />

    <schematicsheet
      name={CORE_SHEET}
      displayName="Core, Power & Programming"
      sheetIndex={0}
    >
      <schematicsection
        name={POWER_INPUT_SECTION}
        displayName="CR2032 Power Input"
      />
      <schematicsection
        name={MCU_POWER_SECTION}
        displayName="MCU Supply & Decoupling"
      />
      <schematicsection
        name={PROGRAMMING_SECTION}
        displayName="SWD Programming"
      />

      <schematicbox
        name="U1 Power"
        chipRef=".U1"
        width={1.96}
        height={1.2}
        schX={0}
        schY={1}
        schSectionName={MCU_POWER_SECTION}
        pinLabels={{
          pin1: "VDD1",
          pin2: "VDD2",
          pin3: "VDD3",
          pin4: "VSS1",
          pin5: "VSS2",
          pin6: "DEC1",
          pin7: "DEC2",
          pin8: "DEC3",
          pin9: "DEC4",
          pin10: "EP",
        }}
        schPinArrangement={{
          leftSide: ["pin1", "pin2", "pin3", "pin4", "pin5"],
          rightSide: ["pin6", "pin7", "pin8", "pin9", "pin10"],
        }}
      />
      <schematicbox
        name="U1 Debug"
        chipRef=".U1"
        width={2.4}
        height={0.8}
        schX={11}
        schY={1}
        schSectionName={PROGRAMMING_SECTION}
        pinLabels={{
          pin1: "SWDIO",
          pin2: "SWDCLK",
          pin3: "nRESET",
        }}
        schPinArrangement={{
          leftSide: [],
          rightSide: ["pin1", "pin2", "pin3"],
        }}
      />
      <BM05B_SRSS_TB_LF__SN_
        name="J2"
        pcbX={0}
        pcbY={-11.5}
        pcbSx={HIDE_FOOTPRINT_TEXT}
        noSchematicRepresentation
      />
      <schematicbox
        name="J2 SWD"
        chipRef=".J2"
        width={1.67}
        height={1.2}
        schX={11}
        schY={-3}
        schSectionName={PROGRAMMING_SECTION}
        pinLabels={{
          pin1: "VTREF",
          pin2: "GND",
          pin3: "SWDIO",
          pin4: "SWDCLK",
          pin5: "nRESET",
        }}
        schPinArrangement={{
          leftSide: [],
          rightSide: ["pin1", "pin2", "pin3", "pin4", "pin5"],
        }}
      />

      <MY_2032_16
        name="BT1"
        layer="bottom"
        pcbX={0}
        pcbY={-1.5}
        schX={-7}
        schY={1}
        schHeight={0.4}
        schSectionName={POWER_INPUT_SECTION}
        schPinArrangement={{
          leftSide: ["VBAT_P1", "VBAT_P2"],
          rightSide: ["VBAT_N"],
        }}
      />
      <PcbCap
        name="C4"
        capacitance="100nF"
        pcbX={-2.0}
        pcbY={8.7}
        schX={-4}
        schY={2}
        schSectionName={POWER_INPUT_SECTION}
      />
      <PcbCap
        name="C9"
        capacitance="4.7uF"
        footprint="0603"
        pcbX={-4.6}
        pcbY={8.8}
        schX={-4}
        schY={0}
        schSectionName={POWER_INPUT_SECTION}
      />

      <PcbCap
        name="C5"
        capacitance="100nF"
        pcbX={-2.8}
        pcbY={6.8}
        schX={3.5}
        schY={3}
        schSectionName={MCU_POWER_SECTION}
      />
      <PcbCap
        name="C7"
        capacitance="100pF"
        pcbX={7.4}
        pcbY={4.3}
        schX={4.5}
        schY={1.5}
        schSectionName={MCU_POWER_SECTION}
      />
      <PcbCap
        name="C8"
        capacitance="100nF"
        pcbX={7.4}
        pcbY={5.8}
        schX={3}
        schY={0}
        schSectionName={MCU_POWER_SECTION}
      />
      <PcbCap
        name="C10"
        capacitance="1uF"
        footprint="0603"
        pcbX={1.0}
        pcbY={8.7}
        pcbRotation={90}
        schX={4.57}
        schY={-1.5}
        schSectionName={MCU_POWER_SECTION}
      />

      <testpoint
        name="TP_VDD"
        footprintVariant="pad"
        padShape="circle"
        padDiameter="1.6mm"
        pcbX={-5.0}
        pcbY={-8.5}
        pcbSx={HIDE_FOOTPRINT_TEXT}
        schX={11}
        schY={-1}
        schSectionName={PROGRAMMING_SECTION}
      />
      <testpoint
        name="TP_SWDIO"
        footprintVariant="pad"
        padShape="circle"
        padDiameter="1.6mm"
        pcbX={-2.5}
        pcbY={-8.5}
        pcbSx={HIDE_FOOTPRINT_TEXT}
        schX={14}
        schY={1.2}
        schSectionName={PROGRAMMING_SECTION}
      />
      <testpoint
        name="TP_GND"
        footprintVariant="pad"
        padShape="circle"
        padDiameter="1.6mm"
        pcbX={0}
        pcbY={-8.5}
        pcbSx={HIDE_FOOTPRINT_TEXT}
        schX={13}
        schY={-1}
        schSectionName={PROGRAMMING_SECTION}
      />
      <testpoint
        name="TP_SWDCLK"
        footprintVariant="pad"
        padShape="circle"
        padDiameter="1.6mm"
        pcbX={2.5}
        pcbY={-8.5}
        pcbSx={HIDE_FOOTPRINT_TEXT}
        schX={14}
        schY={0.8}
        schSectionName={PROGRAMMING_SECTION}
      />
      <testpoint
        name="TP_RESET"
        footprintVariant="pad"
        padShape="circle"
        padDiameter="1.6mm"
        pcbX={5.0}
        pcbY={-8.5}
        pcbSx={HIDE_FOOTPRINT_TEXT}
        schX={14}
        schY={0.4}
        schSectionName={PROGRAMMING_SECTION}
      />

      <trace from=".BT1 > .VBAT_P1" to="net.VBAT_RAW" width="0.15mm" />
      <trace from=".BT1 > .VBAT_P2" to="net.VBAT_RAW" width="0.15mm" />
      <trace from=".BT1 > .VBAT_N" to="net.GND" width="0.15mm" />

      <trace from=".U1 > .VDD1" to="net.VBAT" width="0.15mm" />
      <trace from=".U1 > .VDD2" to="net.VBAT" width="0.15mm" />
      <trace from=".U1 > .VDD3" to="net.VBAT" width="0.15mm" />
      <trace from=".U1 > .VSS1" to="net.GND" width="0.15mm" />
      <trace from=".U1 > .VSS2" to="net.GND" width="0.15mm" />
      <trace
        from=".U1 > .EP"
        to="net.GND"
        width="0.1mm"
        pcbPathRelativeTo=".U1 > .EP"
        pcbPath={[
          { x: 2.3, y: 2.3 },
          { x: 2.9, y: 2.9 },
        ]}
      />
      <via
        name="VIA_EP_GND"
        pcbX={4.9}
        pcbY={6.4}
        holeDiameter="0.3mm"
        outerDiameter="0.6mm"
        connectsTo="net.GND"
      />

      <trace from=".C4 > .pin1" to="net.VBAT" width="0.15mm" />
      <trace from=".C4 > .pin2" to="net.GND" width="0.15mm" />
      <trace from=".C9 > .pin1" to="net.VBAT" width="0.15mm" />
      <trace from=".C9 > .pin2" to="net.GND" width="0.15mm" />
      <trace from=".U1 > .DEC1" to=".C5 > .pin1" width="0.15mm" />
      <trace from=".C5 > .pin2" to="net.GND" width="0.15mm" />
      <trace from=".U1 > .DEC2" to=".C7 > .pin1" width="0.15mm" />
      <netlabel
        net="GND"
        connectsTo=".C7 > .pin2"
        schX={4.5}
        schY={1.2}
        anchorSide="top"
      />
      <trace from=".U1 > .DEC3" to=".C8 > .pin1" width="0.15mm" />
      <netlabel
        net="GND"
        connectsTo=".C8 > .pin2"
        schX={3}
        schY={-0.3}
        anchorSide="top"
      />
      <via
        name="VIA_C7_GND"
        pcbX={7.91}
        pcbY={5.0}
        holeDiameter="0.2mm"
        outerDiameter="0.35mm"
        connectsTo={[".C7 > .pin2", "net.GND"]}
      />
      <via
        name="VIA_C8_GND"
        pcbX={7.91}
        pcbY={6.5}
        holeDiameter="0.2mm"
        outerDiameter="0.35mm"
        connectsTo={[".C8 > .pin2", "net.GND"]}
      />
      <trace from=".U1 > .DEC4" to=".C10 > .pin1" width="0.15mm" />
      <trace from=".C10 > .pin2" to="net.GND" width="0.15mm" />

      <trace from=".U1 > .SWDIO" to="net.SWDIO" width="0.15mm" />
      <trace from=".TP_SWDIO > .pin1" to="net.SWDIO" width="0.15mm" />
      <trace from=".U1 > .SWDCLK" to="net.SWDCLK" width="0.15mm" />
      <trace from=".TP_SWDCLK > .pin1" to="net.SWDCLK" width="0.15mm" />
      <trace from=".U1 > .nRESET" to="net.NRESET" width="0.15mm" />
      <trace from=".TP_RESET > .pin1" to="net.NRESET" width="0.15mm" />
      <trace from=".TP_VDD > .pin1" to="net.VBAT" width="0.15mm" />
      <trace from=".TP_GND > .pin1" to="net.GND" width="0.15mm" />
      <trace from=".J2 > .VTREF" to="net.VBAT" width="0.15mm" />
      <trace from=".J2 > .GND" to="net.GND" width="0.15mm" />
      <trace from=".J2 > .SWDIO" to="net.SWDIO" width="0.15mm" />
      <trace from=".J2 > .SWDCLK" to="net.SWDCLK" width="0.15mm" />
      <trace from=".J2 > .nRESET" to="net.NRESET" width="0.15mm" />
    </schematicsheet>

    <schematicsheet
      name={INTERFACE_SHEET}
      displayName="USB-C Power & Status LED"
      sheetIndex={1}
    >
      <schematicsection
        name={USB_INPUT_SECTION}
        displayName="USB-C Power Input"
      />
      <schematicsection
        name={POWER_MUX_SECTION}
        displayName="USB / CR2032 Power Selection"
      />
      <schematicsection
        name={STATUS_LED_SECTION}
        displayName="RGB Status LED"
      />

      <TYPE_C_31_M_12
        name="J1"
        pcbX={-10.8}
        pcbY={7}
        pcbRotation={-90}
        pcbSx={HIDE_FOOTPRINT_TEXT}
        noSchematicRepresentation
      />
      <schematicbox
        name="J1 USB-C Power"
        chipRef=".J1"
        width={1.765}
        height={1.6}
        schX={-8}
        schY={2}
        schSectionName={USB_INPUT_SECTION}
        pinLabels={{
          pin1: "GND_A",
          pin2: "GND_B",
          pin3: "SHIELD1",
          pin4: "VBUS_A",
          pin5: "VBUS_B",
          pin6: "CC1",
          pin7: "CC2",
        }}
        schPinArrangement={{
          leftSide: [],
          rightSide: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6", "pin7"],
        }}
      />
      <resistor
        name="R_CC1"
        resistance="5.1k"
        footprint="0402"
        pcbX={-6.3}
        pcbY={1.5}
        pcbSx={HIDE_FOOTPRINT_TEXT}
        schX={-4.5}
        schY={1}
        schOrientation="vertical"
        schSectionName={USB_INPUT_SECTION}
      />
      <resistor
        name="R_CC2"
        resistance="5.1k"
        footprint="0402"
        pcbX={-6.3}
        pcbY={13}
        pcbSx={HIDE_FOOTPRINT_TEXT}
        schX={-2.5}
        schY={1}
        schOrientation="vertical"
        schSectionName={USB_INPUT_SECTION}
      />
      <MCP1700T_3302E_TT
        name="U2"
        pcbX={-11}
        pcbY={-1.5}
        pcbRotation={90}
        pcbSx={HIDE_FOOTPRINT_TEXT}
        noSchematicRepresentation
      />
      <schematicbox
        name="U2 USB LDO"
        chipRef=".U2"
        width={1.865}
        height={0.8}
        schX={0}
        schY={2}
        schSectionName={POWER_MUX_SECTION}
        pinLabels={{ pin1: "VIN", pin2: "GND", pin3: "VOUT" }}
        schPinArrangement={{
          leftSide: [],
          rightSide: ["pin1", "pin2", "pin3"],
        }}
      />
      <PcbCap
        name="C15"
        capacitance="1uF"
        footprint="0603"
        pcbX={-13}
        pcbY={-4.5}
        schX={-1.5}
        schY={0}
        schSectionName={POWER_MUX_SECTION}
      />
      <PcbCap
        name="C16"
        capacitance="1uF"
        footprint="0603"
        pcbX={-9}
        pcbY={-5}
        schX={1.5}
        schY={0}
        schSectionName={POWER_MUX_SECTION}
      />
      <BAT54HT1G
        name="D_USB"
        pcbX={-6.5}
        pcbY={-1.5}
        pcbSx={HIDE_FOOTPRINT_TEXT}
        schX={3.5}
        schY={2}
        schSectionName={POWER_MUX_SECTION}
      />
      <AO3401A
        name="Q1"
        pcbX={-4}
        pcbY={-5.2}
        symbol={undefined}
        pcbSx={HIDE_FOOTPRINT_TEXT}
        noSchematicRepresentation
      />
      <schematicbox
        name="Q1 Battery Switch"
        chipRef=".Q1"
        width={1.39}
        height={0.8}
        schX={3.5}
        schY={-1.5}
        schSectionName={POWER_MUX_SECTION}
        pinLabels={{ pin1: "D", pin2: "S", pin3: "G" }}
        schPinArrangement={{
          leftSide: [],
          rightSide: ["pin1", "pin2", "pin3"],
        }}
      />
      <resistor
        name="R_GATE_USB"
        resistance="100k"
        footprint="0402"
        pcbX={-9}
        pcbY={-7}
        pcbSx={HIDE_FOOTPRINT_TEXT}
        schX={1}
        schY={-2.5}
        schSectionName={POWER_MUX_SECTION}
      />
      <resistor
        name="R_GATE_PD"
        resistance="1M"
        footprint="0402"
        pcbX={-11}
        pcbY={-7}
        pcbSx={HIDE_FOOTPRINT_TEXT}
        schX={3.5}
        schY={-3.5}
        schOrientation="vertical"
        schSectionName={POWER_MUX_SECTION}
      />

      <schematicbox
        name="U1 Status GPIO"
        chipRef=".U1"
        width={2.2}
        height={0.8}
        schX={6.5}
        schY={2}
        schSectionName={STATUS_LED_SECTION}
        pinLabels={{ pin1: "P0_06", pin2: "P0_07", pin3: "P0_08" }}
        schPinArrangement={{
          leftSide: [],
          rightSide: ["pin1", "pin2", "pin3"],
        }}
      />
      <resistor
        name="R_LED_B"
        resistance="1k"
        footprint="0402"
        pcbX={-7.5}
        pcbY={-9.5}
        pcbSx={HIDE_FOOTPRINT_TEXT}
        schX={10}
        schY={3.2}
        schSectionName={STATUS_LED_SECTION}
      />
      <resistor
        name="R_LED_G"
        resistance="1k"
        footprint="0402"
        pcbX={-7.5}
        pcbY={-10.5}
        pcbSx={HIDE_FOOTPRINT_TEXT}
        schX={10}
        schY={2}
        schSectionName={STATUS_LED_SECTION}
      />
      <resistor
        name="R_LED_R"
        resistance="1k"
        footprint="0402"
        pcbX={-7.5}
        pcbY={-11.5}
        pcbSx={HIDE_FOOTPRINT_TEXT}
        schX={10}
        schY={0.8}
        schSectionName={STATUS_LED_SECTION}
      />
      <E6C0606RGBC3UDA
        name="LED1"
        pcbX={-11}
        pcbY={-11}
        pcbSx={HIDE_FOOTPRINT_TEXT}
        noSchematicRepresentation
      />
      <schematicbox
        name="LED1 RGB"
        chipRef=".LED1"
        width={2.2}
        height={1}
        schX={14}
        schY={2}
        schSectionName={STATUS_LED_SECTION}
        pinLabels={{
          pin1: "BLUE_K",
          pin2: "GREEN_K",
          pin3: "RED_K",
          pin4: "COMMON_ANODE",
        }}
        schPinArrangement={{
          leftSide: ["pin1", "pin2", "pin3", "pin4"],
          rightSide: [],
        }}
      />

      <trace
        from=".J1 > .VBUS_A"
        to=".C15 > .pin1"
        width="0.3mm"
        pcbPathRelativeTo=".J1 > .VBUS_A"
        pcbPath={[
          { x: -2.4, y: 3.3 },
          { x: -2.15, y: 3.3 },
          { x: -2.15, y: 0.1 },
          { x: -2.15, y: 0.1, via: true, toLayer: "bottom" },
          { x: -2.15, y: 0.1 },
          { x: -2.15, y: -3.75 },
          { x: 11.5, y: -3.75 },
          { x: 11.5, y: -3.75, via: true, toLayer: "top" },
          { x: 11.5, y: -3.75 },
        ]}
        schDisplayLabel="VBUS_5V"
      />
      <trace
        from=".J1 > .VBUS_B"
        to=".U2 > .VIN"
        width="0.3mm"
        pcbPathRelativeTo=".J1 > .VBUS_B"
        pcbPath={[
          { x: 2.4, y: 3.3 },
          { x: 2.18, y: 3.3 },
          { x: 2.18, y: 0 },
          { x: 9.735, y: 0 },
        ]}
        schDisplayLabel="VBUS_5V"
      />
      <trace from=".J1 > .GND_A" to="net.GND" width="0.3mm" />
      <trace from=".J1 > .GND_B" to="net.GND" width="0.3mm" />
      <trace from=".J1 > .SHIELD1" to="net.GND" width="0.3mm" />
      <trace from=".J1 > .SHIELD2" to="net.GND" width="0.3mm" />
      <trace from=".J1 > .SHIELD3" to="net.GND" width="0.3mm" />
      <trace from=".J1 > .SHIELD4" to="net.GND" width="0.3mm" />
      <trace from=".J1 > .CC1" to=".R_CC1 > .pin1" width="0.15mm" />
      <trace from=".R_CC1 > .pin2" to="net.GND" width="0.15mm" />
      <trace from=".J1 > .CC2" to=".R_CC2 > .pin1" width="0.15mm" />
      <trace from=".R_CC2 > .pin2" to="net.GND" width="0.15mm" />

      <trace from=".U2 > .GND" to="net.GND" width="0.2mm" />
      <trace
        from=".U2 > .VIN"
        to=".C15 > .pin1"
        width="0.2mm"
        schDisplayLabel="VBUS_5V"
      />
      <trace from=".C15 > .pin2" to="net.GND" width="0.2mm" />
      <trace from=".U2 > .VOUT" to="net.USB_3V3" width="0.3mm" />
      <trace from=".C16 > .pin1" to="net.USB_3V3" width="0.2mm" />
      <trace from=".C16 > .pin2" to="net.GND" width="0.2mm" />
      <trace from=".D_USB > .anode" to="net.USB_3V3" width="0.3mm" />
      <trace from=".D_USB > .cathode" to="net.VBAT" width="0.3mm" />

      <trace from=".Q1 > .D" to="net.VBAT_RAW" width="0.3mm" />
      <trace from=".Q1 > .S" to="net.VBAT" width="0.3mm" />
      <trace from=".Q1 > .G" to="net.USB_PRESENT" width="0.15mm" />
      <trace
        from=".C15 > .pin1"
        to=".R_GATE_USB > .pin1"
        width="0.15mm"
        schDisplayLabel="VBUS_5V"
      />
      <trace from=".R_GATE_USB > .pin2" to="net.USB_PRESENT" width="0.15mm" />
      <trace from=".R_GATE_PD > .pin1" to="net.USB_PRESENT" width="0.15mm" />
      <trace from=".R_GATE_PD > .pin2" to="net.GND" width="0.15mm" />

      <trace from=".U1 > .P0_06" to=".R_LED_B > .pin1" width="0.15mm" />
      <trace from=".R_LED_B > .pin2" to=".LED1 > .BLUE_K" width="0.15mm" />
      <trace from=".U1 > .P0_07" to=".R_LED_G > .pin1" width="0.15mm" />
      <trace from=".R_LED_G > .pin2" to=".LED1 > .GREEN_K" width="0.15mm" />
      <trace from=".U1 > .P0_08" to=".R_LED_R > .pin1" width="0.15mm" />
      <trace from=".R_LED_R > .pin2" to=".LED1 > .RED_K" width="0.15mm" />
      <trace from=".LED1 > .COMMON_ANODE" to="net.VBAT" width="0.15mm" />
    </schematicsheet>

    <schematicsheet
      name={CLOCK_SHEET}
      displayName="Clock Sources"
      sheetIndex={2}
    >
      <schematicsection name={HF_CLOCK_SECTION} displayName="32 MHz Crystal" />
      <schematicsection
        name={LF_CLOCK_SECTION}
        displayName="32.768 kHz Crystal"
      />

      <schematicbox
        name="U1 HF Clock"
        chipRef=".U1"
        width={2.4}
        height={0.6}
        schX={-7}
        schY={CLOCK_SHEET_Y + 1}
        schSectionName={HF_CLOCK_SECTION}
        pinLabels={{ pin1: "XC1", pin2: "XC2" }}
        schPinArrangement={{ leftSide: [], rightSide: ["pin1", "pin2"] }}
      />
      <X201632MKB4SI
        name="X1"
        pcbX={4.0}
        pcbY={8.6}
        pcbRotation={90}
        noSchematicRepresentation
      />
      <schematicsymbol
        name="X1_Symbol"
        displayName="X1"
        chipRef=".X1"
        symbolName="crystal_4pin"
        schX={-4}
        schY={CLOCK_SHEET_Y + 1}
        schSectionName={HF_CLOCK_SECTION}
        connections={{
          pin1: ".X1 > .XTAL1",
          gnd1: ".X1 > .GND1",
          pin3: ".X1 > .XTAL2",
          gnd2: ".X1 > .GND2",
        }}
      />
      <PcbCap
        name="C1"
        capacitance="12pF"
        pcbX={2.0}
        pcbY={11.2}
        schX={-5}
        schY={CLOCK_SHEET_Y - 1}
        schSectionName={HF_CLOCK_SECTION}
      />
      <PcbCap
        name="C2"
        capacitance="12pF"
        pcbX={7.2}
        pcbY={9.9}
        schX={-3}
        schY={CLOCK_SHEET_Y - 1}
        schSectionName={HF_CLOCK_SECTION}
      />

      <schematicbox
        name="U1 LF Clock"
        chipRef=".U1"
        width={2.4}
        height={0.6}
        schX={3}
        schY={CLOCK_SHEET_Y + 1}
        schSectionName={LF_CLOCK_SECTION}
        pinLabels={{ pin1: "XL1", pin2: "XL2" }}
        schPinArrangement={{ leftSide: [], rightSide: ["pin1", "pin2"] }}
      />
      <ABS07_32_768KHZ_9_T
        name="X2"
        pcbX={-4.2}
        pcbY={5.1}
        noSchematicRepresentation
      />
      <schematicsymbol
        name="X2_Symbol"
        displayName="X2"
        chipRef=".X2"
        symbolName="crystal"
        schX={6}
        schY={CLOCK_SHEET_Y + 1}
        schSectionName={LF_CLOCK_SECTION}
        connections={{
          pin1: ".X2 > .OSC1",
          pin2: ".X2 > .OSC2",
        }}
      />
      <PcbCap
        name="C11"
        capacitance="12pF"
        pcbX={-6.6}
        pcbY={6.9}
        schX={5}
        schY={CLOCK_SHEET_Y - 1}
        schSectionName={LF_CLOCK_SECTION}
      />
      <PcbCap
        name="C12"
        capacitance="12pF"
        pcbX={-6.6}
        pcbY={3.3}
        schX={7}
        schY={CLOCK_SHEET_Y - 1}
        schSectionName={LF_CLOCK_SECTION}
      />

      <trace
        from=".U1 > .XC1"
        to=".X1 > .XTAL1"
        width="0.15mm"
        maxLength="12mm"
        schDisplayLabel="XC1"
      />
      <trace
        from=".U1 > .XC2"
        to=".X1 > .XTAL2"
        width="0.15mm"
        maxLength="12mm"
        schDisplayLabel="XC2"
      />
      <trace from=".X1 > .GND1" to="net.GND" width="0.15mm" />
      <trace from=".X1 > .GND2" to="net.GND" width="0.15mm" />
      <trace
        from=".X1 > .XTAL1"
        to=".C1 > .pin1"
        width="0.15mm"
        schDisplayLabel="XC1"
      />
      <trace from=".C1 > .pin2" to="net.GND" width="0.15mm" />
      <trace
        from=".X1 > .XTAL2"
        to=".C2 > .pin1"
        width="0.15mm"
        schDisplayLabel="XC2"
      />
      <trace from=".C2 > .pin2" to="net.GND" width="0.15mm" />

      <trace
        from=".U1 > .XL1"
        to=".X2 > .OSC1"
        width="0.15mm"
        maxLength="10mm"
        schDisplayLabel="XL1"
      />
      <trace
        from=".U1 > .XL2"
        to=".X2 > .OSC2"
        width="0.15mm"
        maxLength="10mm"
        schDisplayLabel="XL2"
      />
      <trace
        from=".X2 > .OSC1"
        to=".C11 > .pin1"
        width="0.15mm"
        schDisplayLabel="XL1"
      />
      <trace from=".C11 > .pin2" to="net.GND" width="0.15mm" />
      <trace
        from=".X2 > .OSC2"
        to=".C12 > .pin1"
        width="0.15mm"
        schDisplayLabel="XL2"
      />
      <trace from=".C12 > .pin2" to="net.GND" width="0.15mm" />
    </schematicsheet>

    <schematicsheet
      name={RF_SHEET}
      displayName="RF Front End & Antenna"
      sheetIndex={3}
    >
      <schematicsection
        name={RF_MATCH_SECTION}
        displayName="Matching Network"
      />
      <schematicsection name={ANTENNA_SECTION} displayName="Chip Antenna" />

      <schematicbox
        name="U1 RF"
        chipRef=".U1"
        width={2.2}
        height={0.4}
        schX={-6}
        schY={RF_SHEET_Y + 1}
        schSectionName={RF_MATCH_SECTION}
        pinLabels={{ pin1: "ANT" }}
        schPinArrangement={{ leftSide: [], rightSide: ["pin1"] }}
      />
      <inductor
        name="L1"
        inductance="3.9nH"
        footprint="0402"
        pcbX={7}
        pcbY={2.7}
        schX={-3}
        schY={RF_SHEET_Y + 1}
        schSectionName={RF_MATCH_SECTION}
      />
      <PcbCap
        name="C3"
        capacitance="0.8pF"
        pcbX={6.7}
        pcbY={1}
        schX={-3}
        schY={RF_SHEET_Y - 1}
        schSectionName={RF_MATCH_SECTION}
      />
      <inductor
        name="L2"
        inductance="6.8nH"
        footprint="0402"
        pcbX={9.0}
        pcbY={3.3}
        schX={0}
        schY={RF_SHEET_Y + 1}
        schSectionName={RF_MATCH_SECTION}
      />
      <PcbCap
        name="C13"
        capacitance="0.5pF"
        pcbX={9.0}
        pcbY={1.5}
        schX={-0.5}
        schY={RF_SHEET_Y - 1}
        schSectionName={RF_MATCH_SECTION}
        doNotPlace
      />
      <PcbCap
        name="C14"
        capacitance="0.5pF"
        pcbX={10.8}
        pcbY={-0.4}
        schX={2}
        schY={RF_SHEET_Y - 1}
        schSectionName={RF_MATCH_SECTION}
        doNotPlace
      />
      <RFANT3216120A5T
        name="ANT1"
        pcbX={13.0}
        pcbY={3.3}
        schX={6.82}
        schY={RF_SHEET_Y + 1}
        schSectionName={ANTENNA_SECTION}
      />

      <trace
        from=".U1 > .ANT"
        to=".L1 > .pin1"
        width="0.18mm"
        maxLength="4mm"
        pcbPathRelativeTo=".U1 > .ANT"
        pcbPath={[
          { x: 3.8, y: -0.2 },
          { x: 4.49, y: -0.8 },
        ]}
      />
      <trace
        from=".L1 > .pin1"
        to=".C3 > .pin1"
        width="0.18mm"
        maxLength="4mm"
      />
      <via
        name="VIA_C3_GND"
        pcbX={7.21}
        pcbY={0.2}
        holeDiameter="0.2mm"
        outerDiameter="0.35mm"
        connectsTo={[".C3 > .pin2", "net.GND"]}
      />
      <trace
        from=".L1 > .pin2"
        to=".L2 > .pin1"
        width="0.5mm"
        maxLength="5mm"
      />
      <trace
        from=".L1 > .pin2"
        to=".C13 > .pin1"
        width="0.18mm"
        maxLength="8mm"
      />
      <trace
        from=".C13 > .pin2"
        to="net.GND"
        width="0.15mm"
        maxLength="5mm"
        pcbPathRelativeTo=".C13 > .pin2"
        pcbPath={[
          { x: 0.51, y: -1.2 },
          { x: 0.51, y: -1.2, via: true, toLayer: "bottom" },
          { x: 0.51, y: -1.2 },
        ]}
      />
      <trace
        name="RF_FEED"
        from=".L2 > .pin2"
        to=".ANT1 > .FEED"
        width="0.5mm"
        maxLength="12mm"
        pcbPathRelativeTo=".L2 > .pin2"
        pcbPath={["ANT1.FEED"]}
      />
      <trace
        from=".L2 > .pin2"
        to=".C14 > .pin1"
        width="0.5mm"
        maxLength="12mm"
      />
      <trace from=".C14 > .pin2" to="net.GND" width="0.15mm" maxLength="5mm" />
    </schematicsheet>

    <keepout
      shape="rect"
      pcbX={12.6}
      pcbY={3.35}
      width="4.8mm"
      height="5.7mm"
      layers={["top", "bottom"]}
      excludeRefs={[".ANT1"]}
    />

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

    <silkscreentext
      text="nRF52810 TRACKER"
      pcbX={8}
      pcbY={-11}
      fontSize="0.8mm"
    />
    <silkscreentext
      text="RF KEEP CLEAR"
      pcbX={11.7}
      pcbY={6.8}
      fontSize="0.55mm"
    />
    <silkscreentext text="V D G C R" pcbX={0} pcbY={-7.1} fontSize="0.55mm" />
    <silkscreentext text="R C D G V" pcbX={0} pcbY={-14.2} fontSize="0.5mm" />
    <silkscreentext text="RGB" pcbX={-11} pcbY={-13} fontSize="0.5mm" />
    <silkscreentext
      text="USB PWR"
      pcbX={-13.8}
      pcbY={7}
      pcbRotation={90}
      fontSize="0.5mm"
    />
  </board>
);
