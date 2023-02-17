import React from 'react'
import './App.css';

import StudentsList from './components/StudentsList/StudentsList';
import SearchBar from './components/SearchBar/SearchBar';
import MenuBar from './components/MenuBar/MenuBar'
import LoginPage from './components/Pages/LoginPage/LoginPage';
import SignupPage from './components/Pages/SignupPage/SignupPage'
import userService from './utils/userService';
import CreatePage from './components/Pages/CreatePage/CreateStudentPage';
// import DeletePage from './components/DeletePage/DeletePage';
import studentService from './utils/studentService';
import DetailsPage from './components/DetailsPage/DetailsPage'
import UpdatePage from './components/UpdatePage/UpdateStudentPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  redirect,
  Navigate
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      students: [],
      user: userService.getUser(),

      isNewUserSignedUp: false
    }

    this.handleLogout = this.handleLogout.bind(this)
    this.setCurrentUser = this.setCurrentUser.bind(this)
    this.updateStudentListState = this.updateStudentListState.bind(this)
    this.updateStudentStateAfterDelete = this.updateStudentStateAfterDelete.bind(this)
    this.getCurrentUser = this.getCurrentUser.bind(this)
  }

  async componentDidMount() {
    /**make calls to api here, and update state if needed */
    // const response = await fetch('http://localhost:3001/api/users')

    //const data = await response.json()

    //this.setState({users: data})
    // const response = await fetch('http://localhost:3001/api/students')
    const data = await studentService.list()
    this.setState({ students: data })
  }
  componentDidUpdate() {

  }

  async updateStudentListState(data) {
    this.setState(state => {
      return { students: [...state.students, data] }
    })

  }

  async updateStudentStateAfterDelete()  {
    const data = await studentService.list()
    console.log(data)
    this.setState({ students: data })
    return redirect ("/students")

  }


  setCurrentUser(userData) {
    this.setState({ user: userData })
  }

  async search() {
    /**implement the search function */

    /**think about sending the search key as a query parameter in your url */
  }

  redirectIfUser() {
    console.log('loader runs...')
    const currentUser = userService.getUser()
    console.log(currentUser)
    if (currentUser) {
      return redirect('/students')
    }
    return null
  }

  redirectToLogin() {
    console.log('checking for user...')
    const currentUser = userService.getUser()
    if (!currentUser) {
      return redirect('/login')
    }
    return null
  }


  getCurrentUser() {
    const currentUser = userService.getUser()
    return currentUser
  }

  getMenu() {
    const menu = [
      { label: 'Students', showAuth: this.state.user ? true : false },
      { label: 'Create', showAuth: this.state.user ? true : false },
      { label: 'Logout', showAuth: this.state.user ? true : false, hasLogoutOption: true },
      { label: 'Login', showAuth: this.state.user ? false : true },
      { label: 'Signup', showAuth: this.state.user ? false : true }
    ]
    return menu
  }

  getStudentsOrlogin() {
    console.log(this.state.students)
    return this.state.user ? (<div className="container">
      <StudentsList students={this.state.students} />
    </div>) : <Navigate to='/login' replace />
  }

  getChildRoutes() {

    /**define child routes here and return them */
    /**element: this.state.user ? <Navigate to='/puppies' replace /> : <LoginPage setCurrentUser={this.setCurrentUser}/>
 */
    const routes = [
      {
        path: '/login',
        element: <LoginPage setCurrentUser={this.setCurrentUser} />,
        loader: this.redirectIfUser

      },
      {
        path: '/signup',
        element: <SignupPage setCurrentUser={this.setCurrentUser} />,
        loader: this.redirectIfUser

      },


      {
        path: '/students',
        element: (
          <>
            {/* <SearchBar /> */}
            {this.getStudentsOrlogin()}
          </>
        )
      },
      {
        path: '/students/:id',
        element: <DetailsPage updateStudentState={this.updateStudentListState}/>,

      },
      {
        path: '/create',
        element: (
          <>
        <CreatePage updateStudentState={this.updateStudentListState} getCurrentUser={this.getCurrentUser} />

        </>)
        // loader: this.redirectIfUser
        // loader: this.getStudentsOrlogin
      },
      {
        path: '/students/:id/update',
        element: <UpdatePage />,

      },
      {
        path: '/logout',
        element: <LoginPage />,
        loader: this.redirectToLogin
      },




    ]

    return routes

  }

  handleLogout() {
    userService.logout();
    this.setState({ user: null });
  }

  getRouter() {
    let router = createBrowserRouter([{
      path: "/",
      element: (<>
        <MenuBar menuOptions={this.getMenu()} handleLogout={this.handleLogout} />

        <Outlet />
      </>

      ),
      /** */
      children: this.getChildRoutes()

    }])
    return router
  }

  render() {
    return (
      <>
        <RouterProvider router={this.getRouter()} />
      </>
    )
  }
}

export default App;
