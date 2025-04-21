import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import NewsAndDetails from '../pages/news/News'
import Insights from '../pages/insights/Insights'
import EventList from '../pages/events/Events'
import Community from '../pages/community/Community'
import FullNewsDetailsPage from '../pages/news/FullNewsDetailsPage'
import Podcast from '../pages/podcast/Podcast'

const Routers = () => {
  return (
    <div>

        <Routes>
        <Route path="/" element={<DashboardLayout />}>
        
         
          <Route path="news" element={<NewsAndDetails />} />
          <Route path="insights" element={<Insights />} />
          <Route path="events" element={<EventList />} />
          <Route path="community" element={<Community />} />
          <Route path="podcast" element={<Podcast />} />
          <Route path="fullNewsDetailsPage" element={<FullNewsDetailsPage />} />
       
        </Route>
        </Routes>
    </div>
  )
}

export default Routers