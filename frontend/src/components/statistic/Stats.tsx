import React from "react";
import { Anchor, Col, Row } from "antd";

export function Statistics() {
  return (
    <>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>

          <h1 id="troop">TroopResults</h1>
          <p>tabela adekwatności stopni do wieku</p>
          <div style={{ height: "5000px" }}></div>
          <p id="patrols">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
            pharetra dolor, sit amet congue purus. Sed lacus est, lobortis ut
            neque vitae, suscipit fringilla elit. Suspendisse quis turpis
            facilisis justo ultricies gravida a et tellus. Phasellus pretium ex
            non nisi semper dapibus. Donec elementum porttitor bibendum. Integer
            lectus eros, lacinia quis justo in, fermentum malesuada velit. Fusce
            volutpat ligula non nunc sagittis, lobortis sagittis dolor tempor.
            Aliquam est risus, mattis ac ultrices sit amet, aliquet nec neque.
            Quisque fermentum elit eget lorem tempor, nec aliquet nisi
            fermentum. Aenean ultricies mauris nec lorem ultricies, sit amet
            placerat dui interdum. Phasellus imperdiet turpis non quam
            facilisis, quis pellentesque purus posuere. Phasellus tempor lectus
            eu sapien condimentum sodales non a arcu. In hac habitasse platea
            dictumst. Phasellus elementum malesuada turpis, eget pellentesque
            nisl vulputate ullamcorper. Etiam elit sapien, tempor at
            sollicitudin semper, accumsan vel felis. Curabitur sodales ex et
            tellus mattis tempor. Nunc suscipit molestie laoreet. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Mauris ac consectetur justo, at malesuada mauris.
            Donec semper nec metus et ultricies. Donec eu dui sit amet orci
            aliquam dictum. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Nullam a neque a dolor facilisis viverra. Sed lobortis
            malesuada diam, in fermentum turpis. Praesent imperdiet risus a erat
            fermentum, id ullamcorper nulla ultrices. In quis accumsan lacus,
            venenatis fringilla lorem. Pellentesque id posuere libero. Fusce
            pharetra, tortor eget euismod sollicitudin, neque erat maximus nibh,
            vitae egestas nulla ex ac massa. Etiam malesuada non urna eu tempus.
            Suspendisse eget fringilla justo. Etiam felis augue, fermentum nec
            leo nec, rhoncus sollicitudin lectus. Nullam eu mattis dolor.
            Integer commodo laoreet ultricies. Duis nec nisi et quam auctor
            pharetra. Nulla sit amet sapien et mauris varius sollicitudin at eu
            sem. Phasellus varius justo et vulputate pulvinar. Nunc tristique mi
            sit amet erat porttitor vestibulum. Morbi felis arcu, porta non
            dapibus sed, dapibus sed justo. Phasellus pharetra dictum augue, nec
            mattis lorem ultricies efficitur. Vivamus mattis condimentum augue a
            auctor. Suspendisse euismod finibus justo. Sed hendrerit nunc vel
            tristique porta. Mauris egestas tincidunt ante a viverra. Fusce non
            enim eu tortor venenatis lobortis ut quis lacus. Duis finibus
            scelerisque ante a cursus. Vivamus mattis leo nec tristique sodales.
            Nam diam nulla, faucibus vitae odio id, ultricies aliquam nunc.
            Suspendisse pellentesque ligula at purus suscipit, ut euismod libero
            commodo. Nam at venenatis sapien. Pellentesque placerat erat et orci
            finibus pulvinar. Proin non est ac nibh lobortis malesuada. Fusce at
            nulla metus. Morbi iaculis at dolor eu feugiat. Duis interdum dolor
            sit amet sem vulputate, eu dignissim elit rhoncus. Praesent vel
            hendrerit purus, et vulputate magna. Nam vel varius magna. Donec
            vulputate enim id purus tristique convallis vitae venenatis tortor.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Ut bibendum faucibus turpis vel faucibus.{" "}
          </p>
          <div style={{ height: "5000px" }}></div>

          <p id="scauts">tabela zdobytych stopni i sprawnosci</p>
        </Col>
        <Col span={4}>
          <Anchor style={{ position: "sticky", top: "100px" }} affix={false} targetOffset={100}
            items={[
              {
                key: "part-1",
                href: "#troop",
                title: "Troop",
              },
              {
                key: "part-2",
                href: "#patrols",
                title: "Patrols",
              },
              {
                key: "part-3",
                href: "#scauts",
                title: "Scauts",
              },
            ]}
          />
        </Col>
      </Row>
    </>
  );
}
