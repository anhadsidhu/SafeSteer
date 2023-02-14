import React from 'react';
import studentService from '../../utils/studentService';
import styles from './DetailsPage.css';

class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.match?.params || {};
    const fetchData = async () => {
      try {
        const { data } = await studentService.show(id);
        this.setState({ student: data });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    };
    fetchData();
  }

  render() {
    const { isLoading, student } = this.state;
    return (
      <>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className={styles.list}>
            <div className={styles.Grid}>
              <h3>{student.firstName}</h3>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default DetailsPage;
