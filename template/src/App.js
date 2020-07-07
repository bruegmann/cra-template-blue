import React from "react";
import { Grid, SidebarMenu, MenuItem } from "blue-react";

import List from "./icons/List";
import House from "./icons/House";
import HomePage from "./pages/HomePage";

import "./styles/main.scss";

function App() {
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
        >
            <SidebarMenu>
                <MenuItem href="#" icon={<House />} label="Home" isHome />
            </SidebarMenu>
        </Grid>
    );
}

export default App;