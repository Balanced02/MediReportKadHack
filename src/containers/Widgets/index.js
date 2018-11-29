import React, { Component } from "react";
import clone from "clone";
import { Row, Col } from "antd";
import basicStyle from "../../config/basicStyle";
import IsoWidgetsWrapper from "./widgets-wrapper";
import IsoWidgetBox from "./widget-box";
import CardWidget from "./card/card-widgets";
import ProgressWidget from "./progress/progress-widget";
import SingleProgressWidget from "./progress/progress-single";
import ReportsWidget from "./report/report-widget";
import StickerWidget from "./sticker/sticker-widget";
import SaleWidget from "./sale/sale-widget";
import VCardWidget from "./vCard/vCard-widget";
import SocialWidget from "./social-widget/social-widget";
import SocialProfile from "./social-widget/social-profile-icon";
import userpic from "../../image/user1.png";
import { TableViews, tableinfos, dataList } from "../Tables/antTables";
import * as rechartConfigs from "../Charts/recharts/config";
import { StackedAreaChart } from "../Charts/recharts/charts/";
import { GoogleChart } from "../Charts/googleChart";
import * as googleChartConfigs from "../Charts/googleChart/config";
import IntlMessages from "../../components/utility/intlMessages";

const tableDataList = clone(dataList);
tableDataList.size = 5;

export default class IsoWidgets extends Component {
  render() {
    const { rowStyle, colStyle } = basicStyle;
    const wisgetPageStyle = {
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "flex-start",
      padding: "15px",
      overflow: "hidden"
    };

    const chartEvents = [
      {
        eventName: "select",
        callback(Chart) {}
      }
    ];

    const stackConfig = {
      ...rechartConfigs.StackedAreaChart,
      width: window.innerWidth < 450 ? 300 : 500
    };
    return (
      <div style={wisgetPageStyle}>
        <Row style={rowStyle} gutter={0} justify="start">
          <Col md={8} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Report Widget */}
              <ReportsWidget
                label={<IntlMessages id="Average Facility Income" />}
                details={
                  <IntlMessages id="Average Percentage of shared income from different departmenst in facilities overseen by the ministry" />
                }
              >
                <SingleProgressWidget
                  label={<IntlMessages id="Pharmacy" />}
                  percent={47}
                  barHeight={7}
                  status="active"
                  info={true} // Boolean: true, false
                />
                <SingleProgressWidget
                  label={<IntlMessages id="Laboratories" />}
                  percent={23}
                  barHeight={7}
                  status="active"
                  info={true} // Boolean: true, false
                />
                <SingleProgressWidget
                  label={<IntlMessages id="Miscellaneous" />}
                  percent={19}
                  barHeight={7}
                  status="active"
                  info={true} // Boolean: true, false
                />
                <SingleProgressWidget
                  label={<IntlMessages id="Registration" />}
                  percent={11}
                  barHeight={7}
                  status="active"
                  info={true} // Boolean: true, false
                />
              </ReportsWidget>
            </IsoWidgetsWrapper>
          </Col>

          <Col md={16} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox>
                <h2 className="isoWidgetLabel">
                  <IntlMessages id="Top Hospitals" />
                </h2>
                {/* TABLE */}
                <TableViews.SimpleView
                  tableInfo={tableinfos[2]}
                  dataList={tableDataList}
                />
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={0} justify="start">
          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sticker Widget */}
              <StickerWidget
                number={<IntlMessages id="2" />}
                text={<IntlMessages id="widget.stickerwidget1.text" />}
                icon="ion-email-unread"
                fontColor="#ffffff"
                bgColor="#7266BA"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sticker Widget */}
              <StickerWidget
                number={<IntlMessages id="76" />}
                text={<IntlMessages id="Field Agents" />}
                icon="ion-android-camera"
                fontColor="#ffffff"
                bgColor="#42A5F6"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sticker Widget */}
              <StickerWidget
                number={<IntlMessages id="98" />}
                text={<IntlMessages id="Average Drug Supply" />}
                icon="ion-chatbubbles"
                fontColor="#ffffff"
                bgColor="#7ED320"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sticker Widget */}
              <StickerWidget
                number={<IntlMessages id="18" />}
                text={<IntlMessages id="Facilities Not Visited" />}
                icon="ion-android-cart"
                fontColor="#ffffff"
                bgColor="#F75D81"
              />
            </IsoWidgetsWrapper>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={0} justify="start">
          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper gutterBottom={20}>
              {/* Card Widget */}
              <CardWidget
                icon="ion-android-chat"
                iconcolor="#42A5F5"
                number={<IntlMessages id="widget.cardwidget1.number" />}
                text={<IntlMessages id="Unanswered Report" />}
              />
            </IsoWidgetsWrapper>

            <IsoWidgetsWrapper gutterBottom={20}>
              {/* Card Widget */}
              <CardWidget
                icon="ion-music-note"
                iconcolor="#F75D81"
                number={<IntlMessages id="40%" />}
                text={<IntlMessages id="Facilities Reached" />}
              />
            </IsoWidgetsWrapper>

            <IsoWidgetsWrapper>
              {/* Card Widget */}
              <CardWidget
                icon="ion-trophy"
                iconcolor="#FEAC01"
                number={<IntlMessages id="5" />}
                text={<IntlMessages id="Deliveries in Progress" />}
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper gutterBottom={20}>
              {/* Progress Widget */}
              <ProgressWidget
                label={<IntlMessages id="Year Target" />}
                details={<IntlMessages id="widget.progresswidget1.details" />}
                icon="ion-pie-graph"
                iconcolor="#4482FF"
                percent={50}
                barHeight={7}
                status="active"
              />
            </IsoWidgetsWrapper>

            <IsoWidgetsWrapper gutterBottom={20}>
              {/* Progress Widget */}
              <ProgressWidget
                label={<IntlMessages id="Month Target" />}
                details={<IntlMessages id="80% Complete" />}
                icon="ion-pie-graph"
                iconcolor="#F75D81"
                percent={80}
                barHeight={7}
                status="active"
              />
            </IsoWidgetsWrapper>

            <IsoWidgetsWrapper>
              {/* Progress Widget */}
              <ProgressWidget
                label={<IntlMessages id="Week Target" />}
                details={<IntlMessages id="65% Complete" />}
                icon="ion-pie-graph"
                iconcolor="#494982"
                percent={65}
                barHeight={7}
                status="active"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={12} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox height={455}>
                <StackedAreaChart {...stackConfig} />
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>
        </Row>
      </div>
    );
  }
}
