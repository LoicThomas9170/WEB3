import Content from './Content/Content';
import Header from './Header/Header';

const Course = ({ course }) => {
  const { name: courseName, parts: courseParts } = course;

  return (
    <div>
      <Header course={courseName} />
      <Content parts={courseParts} />
    </div>
  );
};

export default Course;
