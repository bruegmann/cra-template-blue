import { Grid, SidebarMenu, MenuItem } from "blue-react"
import { List, House, XCircleFill, InfoCircleFill, CheckCircleFill, ExclamationCircleFill } from "react-bootstrap-icons"

import HomePage from "./pages/HomePage"

import "./styles/main.scss"

export default function App() {
    return (
        <Grid
            expandSidebar
            sidebarToggleIconComponent={<List />}
            pages={[
                {
                    name: "home",
                    component: <HomePage />
                }
            ]}
            statusIcons={{
                danger: <XCircleFill />,
                info: <InfoCircleFill />,
                success: <CheckCircleFill />,
                warning: <ExclamationCircleFill />
            }}
        >
            <SidebarMenu>
                <MenuItem href="#" icon={<House />} label="Home" isHome />
            </SidebarMenu>
        </Grid>
    )
}