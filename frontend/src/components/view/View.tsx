import { Anchor, Col, Row, Table } from "antd";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../../config.json";

export function View() {
  const values = [""];

  const [badgeEvents, setBadgeEvents] = useState<Array<any>>([]);

  interface ScoutsValues {
    scouts: Array<any>;
    patrols: Array<any>;
  }

  const [scoutsInfo, setScoutsInfo] = useState<ScoutsValues>();

  const badgeColumns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Scout",
      dataIndex: "scout",
      key: "scout",
    },
    {
      title: "Badge",
      dataIndex: "badge",
      key: "badge",
    },
    {
      title: "Comment",
      dataIndex: "comment",
      key: "comment",
    },
  ];

  const scoutColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
    },
    {
      title: "Badges",
      dataIndex: "badges",
      key: "badges",
    },
  ];

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ values }),
    };
    fetch(SERVER_URL + "/api/badge-events", requestOptions)
      .then((response) => response.json())
      .then((newBadgeEvents) => setBadgeEvents(newBadgeEvents));

    const requestOptions2 = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ values }),
    };
    fetch(SERVER_URL + "/api/scouts", requestOptions2)
      .then((response) => response.json())
      .then((newScouts) => setScoutsInfo(newScouts));
  }, []);

  return (
    <>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <h1 id="badges">Badges</h1>
          <Table
            columns={badgeColumns}
            dataSource={badgeEvents}
            style={{ margin: "15x" }}
          />
          <h1 id="scouts">Scouts</h1>
          <Table 
          // docelowo zagniezdzona tabela z patrolami
            columns={scoutColumns}
            dataSource={scoutsInfo !== undefined ? scoutsInfo.scouts : []}
            style={{ margin: "15x" }}
          />
        </Col>
        <Col span={4}>
          <Anchor
            style={{ position: "sticky", top: "100px" }}
            affix={false}
            targetOffset={100}
            items={[
              {
                key: "part-1",
                href: "#badges",
                title: "Badges",
              },
              {
                key: "part-2",
                href: "#scouts",
                title: "Scouts",
              },
            ]}
          />
        </Col>
      </Row>
    </>
  );
}
