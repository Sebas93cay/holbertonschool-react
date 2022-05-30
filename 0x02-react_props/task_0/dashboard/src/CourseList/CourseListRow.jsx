import PropTypes from 'prop-types';

export const CourseListRow = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) => {
  return (
    <>
      {isHeader ? (
        textSecondCell === null ? (
          <tr>
            <th colSpan='2'>textFirstCell</th>
          </tr>
        ) : (
          <tr>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </tr>
        )
      ) : (
        <tr>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </tr>
      )}
    </>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};
