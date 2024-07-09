import { HashRouter, Route, Routes } from "react-router-dom"
import Login from "./Component/login/Login"
import { Dashboard } from "./Component/dashboard/dashboard.component"
import Leads from "./Component/leads/leads.component"
import { Staff } from "./Component/staff/staff.component"
import { Tasks } from "./Component/tasks/tasks.component"
import { Bookkeeping } from "./Component/bookkeeping/bookkeeping.component"
import ProjectsTable from "./Component/customers/costumers.component"
import { NotFound } from "./Component/notFound/notFound.component"
import Nav from "./Component/nav/nav.component"

export const Routing=()=>{
    return<>
    <p>dfghjk</p>
    <HashRouter>
    <Routes>
    <Route path="" element={<Nav />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/leads" element={<Leads />} />
    <Route path="/staff" element={<Staff />} />
    <Route path="/tasks" element={<Tasks />} />
    <Route path="/bookkeeping" element={<Bookkeeping />} />
    <Route path="/not-found" element={<NotFound />} />
    <Route path="/customers" element={<ProjectsTable />} />
    </Routes>
    </HashRouter>
    </>
    }
    