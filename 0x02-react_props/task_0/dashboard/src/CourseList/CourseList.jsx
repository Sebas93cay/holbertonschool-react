import { CourseListRow } from './CourseListRow';
import './CourseList.css';

export const CourseList = () => {
  return (
    <table id='CourseList'>
      <thead>
        <CourseListRow
          textFirstCell='Available courses'
          isHeader={true}
        ></CourseListRow>
        <CourseListRow
          textFirstCell='Course name'
          textSecondCell='Credit'
          isHeader={true}
        ></CourseListRow>
      </thead>
      <tbody>
        <CourseListRow
          isHeader={false}
          textFirstCell='ES6'
          textSecondCell='60'
        ></CourseListRow>
        <CourseListRow
          isHeader={false}
          textFirstCell='Webpack'
          textSecondCell='20'
        ></CourseListRow>
        <CourseListRow
          isHeader={false}
          textFirstCell='React'
          textSecondCell='40'
        ></CourseListRow>
      </tbody>
    </table>
  );
};
