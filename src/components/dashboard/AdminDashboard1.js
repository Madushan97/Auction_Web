import React from 'react'
import Budget from './Budget'
import LatestOrders from './LatestOrders'
import LatestProducts from './LatestProducts'
import Sales from './Sales'
import TasksProgress from './TasksProgress'
import TotalCustomers from './TotalCustomers'
import TotalProfit from './TotalProfit'
import TrafficByDevice from './TrafficByDevice'

function AdminDashboard1() {
    return (
        <div>
            <Budget/>
            <LatestOrders/>
            <LatestProducts/>
            <Sales/>
            <TasksProgress/>
            <TotalCustomers/>
            <TotalProfit/>
            <TrafficByDevice/>

        </div>
    )
}

export default AdminDashboard1;
