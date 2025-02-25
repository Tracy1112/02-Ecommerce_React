import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Header, Navbar, Loading } from '../components'

const HomeLayout = () => {
  const navigation = useNavigation()
  const ispageLoading = navigation.state === 'loading'
  return (
    <>
      <Header />
      <Navbar />
      {ispageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  )
}

export default HomeLayout
