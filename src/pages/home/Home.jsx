import React from 'react';
import "./home.css"
import Coursesinfo from "../../components/coursesInfo/CoursesInfo"
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

export default function Home() {
  return (
    <div className="home">
        <span className="head">Courses in Progress</span>
        <Coursesinfo/>
        <div className='homeWidgets'>
          <WidgetLg/>
          <WidgetSm/>
        </div>
    </div>
  )
}