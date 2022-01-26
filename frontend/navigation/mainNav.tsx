import React, { FC, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./appstack";
import AuthStack from "./authstack";
import { IStackScreenProps } from "../library/StackScreenProps";

const MainNav: FC<IStackScreenProps> = (props) => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default MainNav;
