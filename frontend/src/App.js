import { Routes, Route } from 'react-router-dom'
import { User } from "./Components/AllUser/User"
import { UserCreate } from "./Components/AllUser/UserCreate"
import { UserUpdate } from "./Components/AllUser/UserUpdate"
import { UserDelete } from "./Components/AllUser/UserDelete"
import { Class } from "./Components/AllClass/Class"
import { ClassCreate } from "./Components/AllClass/ClassCreate"
import { ClassUpdate } from "./Components/AllClass/ClassUpdate"
import { ClassDelete } from "./Components/AllClass/ClassDelete"
import { Student } from "./Components/AllStudent/Student"
import { StudentCreate } from "./Components/AllStudent/StudentCreate"
import { StudentUpdate } from "./Components/AllStudent/StudentUpdate"
import { StudentDelete } from "./Components/AllStudent/StudentDelete"
import { Receipt } from "./Components/AllReceipt/Receipt"
import { ReceiptCreate } from "./Components/AllReceipt/ReceiptCreate"
import { ReceiptUpdate } from "./Components/AllReceipt/ReceiptUpdate"
import { ReceiptDelete } from "./Components/AllReceipt/ReceiptDelete"
import Login, { Change, SingUp } from './Login'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Services } from './Pages/Services'
import { Contuct } from './Pages/Contuct'
import './index.css'
import { Header } from './Header'
import { AdminDashboard } from './Pages/AdminDashboard '
import { UserDashboard } from './Pages/UserDashboard'
import { UpdateUserProfile } from './Pages/AccountPro'
const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/Profile/:id" element={<UpdateUserProfile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SingUp />} />
                <Route path="/UserDashboard" element={<UserDashboard />} />
                <Route path="/AdminDashboard" element={<AdminDashboard />} />
                <Route path="/change" element={<Change />} />
                <Route path="/User" element={<User />} />
                <Route path="/UserUpdate/:id" element={<UserUpdate />} />
                <Route path="/UserCreate" element={<UserCreate />} />
                <Route path="/UserDelete/:id" element={<UserDelete />} />
                <Route path="/Class" element={<Class />} />
                <Route path="/ClassUpdate/:id" element={<ClassUpdate />} />
                <Route path="/ClassCreate" element={<ClassCreate />} />
                <Route path="/ClassDelete/:id" element={<ClassDelete />} />
                <Route path="/Student" element={<Student />} />
                <Route path="/StudentUpdate/:id" element={<StudentUpdate />} />
                <Route path="/StudentCreate" element={<StudentCreate />} />
                <Route path="/StudentDelete/:id" element={<StudentDelete />} />
                <Route path="/Receipt" element={<Receipt />} />
                <Route path="/ReceiptUpdate/:id" element={<ReceiptUpdate />} />
                <Route path="/ReceiptCreate" element={<ReceiptCreate />} />
                <Route path="/ReceiptDelete/:id" element={<ReceiptDelete />} />


                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contuct" element={<Contuct />} />
            </Routes>
        </div>
    )
}
export default App


