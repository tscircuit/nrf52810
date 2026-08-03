import type { DiodeProps } from "@tscircuit/props";

const pinLabels = {
  pin1: ["cathode", "neg"],
  pin2: ["anode", "pos"],
} as const;

export const BAT54HT1G = (props: DiodeProps) => {
  const { name = "D1", ...restProps } = props;

  return (
    <diode
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C21107"],
      }}
      manufacturerPartNumber="BAT54HT1G"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1", "cathode", "neg"]}
            pcbX="-1.172464mm"
            pcbY="0mm"
            width="0.999998mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2", "anode", "pos"]}
            pcbX="1.172464mm"
            pcbY="0mm"
            width="0.999998mm"
            height="0.6999986mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 0.9012681999998904, y: -0.7262875999999778 },
              { x: 0.9012681999998904, y: -0.5200903999999582 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.9012681999998904, y: 0.7260843999999906 },
              { x: 0.9012681999998904, y: 0.5299455999999054 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8512048000001187, y: 0.7260843999999906 },
              { x: 0.9012681999998904, y: 0.7260843999999906 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8512048000001187, y: -0.7262875999999778 },
              { x: 0.9012681999998904, y: -0.7262875999999778 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.4467352000001483, y: 0.7260843999999906 },
              { x: -0.4467352000001483, y: -0.7262875999999778 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.007366mm"
            pcbY="1.796544mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.9190340000000106, y: 1.0465439999999262 },
              { x: 1.9337659999999914, y: 1.0465439999999262 },
              { x: 1.9337659999999914, y: -1.0536560000000463 },
              { x: -1.9190340000000106, y: -1.0536560000000463 },
              { x: -1.9190340000000106, y: 1.0465439999999262 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C21107.obj?uuid=7459fe65e23146c0a8d836e46a0add72",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C21107.step?uuid=7459fe65e23146c0a8d836e46a0add72",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.00011430000006384944, z: 0 },
      }}
      {...restProps}
    />
  );
};
