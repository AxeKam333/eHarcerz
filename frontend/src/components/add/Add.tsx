import { Col, Form, Radio, Row, Select, SelectProps } from "antd";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../../config.json";
import { AddForm } from "./AddForm";
import { BadgesInfoValues, FormValues, ScoutsInfoValues } from "../../types/AddTypes";

export function Add() {
  const [form] = Form.useForm();

  const [badgesInfo, setBadgesInfo] = useState<BadgesInfoValues>();
  const [filteredBadges, setFilteredBadges] = useState<Array<any>>([]);

  const [scoutsInfo, setScoutsInfo] = useState<ScoutsInfoValues>();
  const [filteredScouts, setFilteredScouts] = useState<Array<any>>([]);


  const [values, setValues] = useState<FormValues>({
    radio: "Badges",
    selectedRankId: undefined,
    selectedBadgesId: [],
    badgeFilters: {
      stars: undefined,
      spec: [],
      category: [],
    },
    selectedScoutsId: [],
    scoutFilters: {
      rank: [],
      patol: [],
    },
  });

  //initial api calls

  useEffect(() => { 
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify("values"),
    };
    fetch(SERVER_URL + "/api/badges", requestOptions)
      .then((response) => response.json())
      .then((newBadges: BadgesInfoValues) => {
        setBadgesInfo(newBadges);
        setFilteredBadges(
          newBadges.badges.map((badge: any) => ({
            key: badge.id,
            label: badge.name,
            value: badge.name,
          }))
        );
      });
    fetch(SERVER_URL + "/api/scouts", requestOptions)
    .then((response) => response.json())
    .then((newScouts:ScoutsInfoValues) => {
      setScoutsInfo(newScouts);
      setFilteredScouts(
        newScouts.scouts.map((scout: any) => ({
          key: scout.id,
          label: scout.name,
          value: scout.name
        }))
      ); 
      
    });

  }, []);

  //badges filter management

  useEffect(() => { 
    if (badgesInfo === undefined || badgesInfo.badges === undefined) {
      console.log("badgesInfo is undefined");
      return;
    } else {
      let filtered = badgesInfo.badges;
    if(values.badgeFilters.stars !== undefined){
        const stars = values.badgeFilters.stars;
        const spec = values.badgeFilters.spec;
        const category = values.badgeFilters.category;

        if (stars.length > 0) {
            filtered = filtered.filter((badge: any) =>
              stars.includes(badge.stars)
            );
          }
        if (spec.length > 0) {
          filtered = filtered.filter((badge: any) =>
            spec.includes(badge.spec)
          );
        }
        if (category.length > 0) {
          filtered = filtered.filter((badge: any) =>
            category.includes(badge.category)
          );
        }
    }
      setFilteredBadges(
        filtered.map((badge: any) => ({ key:badge.id, label: badge.name, value: badge.name }))
      );
    }
  }, [values.badgeFilters]);

  //scouts filter management

  useEffect(() => { 
    if (scoutsInfo === undefined || scoutsInfo.scouts === undefined) {
      console.log("scoutsInfo is undefined");
      return;
    } else {
      let filtered = scoutsInfo.scouts;

        const patrol = values.scoutFilters.patol;
        const rank = values.scoutFilters.rank;

        if (patrol.length > 0) {
          filtered = filtered.filter((scout: any) =>
            patrol.includes(scout.patrol)
          );
        }
        if (rank.length >0) {
          filtered = filtered.filter((scout: any) =>
            rank.includes(scout.rank)
          );
        }

        setFilteredScouts(
          filtered.map((scout:any)=>({ key: scout.id, label: scout.name, value: scout.name}))
        )
    }
  }, [values.scoutFilters]);

  // options:

  const starsOptions = [
    { label: "*", value: 1 },
    { label: "**", value: 2 },
    { label: "***", value: 3 },
  ];
  let specOptions: SelectProps["options"] = [];
  let categoryOptions: SelectProps["options"] = [];
  let rankOptions: SelectProps["options"] = [];
  let patrolOptions: SelectProps["options"] = [];
  if (badgesInfo) {
    specOptions = badgesInfo.specs.map((spec: any) => ({
      label: spec.name,
      value: spec.name,
    }));
    categoryOptions = badgesInfo.categories.map((category: any) => ({
      label: category.name,
      value: category.name,
    }));
    rankOptions = badgesInfo.ranks.map((rank: any) => {
        return {
            label: rank[1],
            value: rank[0],
        };
    })
    patrolOptions = scoutsInfo?.patrols.map((patrol: any) =>{
      return {
        label: patrol.name,
        value: patrol.name
      }
    })
  }  

  return (
    <>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <AddForm form={form}>
            <Radio.Group
              options={["Badges", "Ranks"]}
              onChange={(e) => {
                setValues({ ...values, radio: e.target.value });
              }}
              value={values.radio}
              optionType="button"
            />
            {values.radio === "Badges" && (
              <>
                <div className="filters">
                  <label>Filters</label>
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: "200px" }}
                    placeholder="stars"
                    onChange={(e) => {
                      setValues({
                        ...values,
                        badgeFilters: { ...values.badgeFilters, stars: e },
                      });
                    }}
                    options={starsOptions}
                  ></Select>
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: "200px" }}
                    disabled={values.badgeFilters.category.length !== 0}
                    placeholder="spec"
                    onChange={(e) => {
                      setValues({
                        ...values,
                        badgeFilters: { ...values.badgeFilters, spec: e },
                      });
                    }}
                    options={specOptions}
                  ></Select>
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: "200px" }}
                    disabled={values.badgeFilters.spec.length !== 0}
                    placeholder="category"
                    onChange={(e) => {
                      setValues({
                        ...values,
                        badgeFilters: { ...values.badgeFilters, category: e },
                      });
                    }}
                    options={categoryOptions}
                  ></Select>
                </div>
                <Form.Item>
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: "200px" }}
                    placeholder="select badge"
                    options={filteredBadges}
                  ></Select>
                </Form.Item>
              </>
            )}
            {values.radio === "Ranks" && (
              <Form.Item>
                <Select
                  allowClear
                  style={{ width: "200px" }}
                  placeholder="select rank"
                  options={rankOptions}
                ></Select>
              </Form.Item>
            )}
            <div className="filters">
              <label>Filters</label>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "200px" }}
                placeholder="rank"
                onChange={(e)=> {
                  setValues({
                    ...values,
                    scoutFilters: { ...values.scoutFilters, rank: e}
                  })
                }}
                options={rankOptions}
              ></Select>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "200px" }}
                placeholder="patrol"
                onChange={(e)=> {
                  setValues({
                    ...values,
                    scoutFilters: { ...values.scoutFilters, patol: e}
                  })
                }}
                options={patrolOptions}
              ></Select>
            </div>
            <Form.Item>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "200px" }}
                placeholder="select scouts"
                options={filteredScouts}
              ></Select>
            </Form.Item>
          </AddForm>
        </Col>
        <Col span={4}>
        </Col>
      </Row>
    </>
  );
}
