import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
      title="Model S"
      description="Order Online for Touchless Delivery" 
      backgroundImage="model-3.jpg"
      leftBtnText="CUSTOM ORDER"
      rightBtnText="EXISTING INVENTORY"/>
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-y.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-s.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      
      
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-x.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Section
        title=" Solar Panels"
      description="Lowest Cost Panels in America."
      backgroundImage="solar-panel.jpg"
      leftBtnText="ORDER NOW"
        rightBtnText='LEARN MORE' />
      <Section
        title="Solar For New Roofs"
      description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
      backgroundImage="solar-roof.jpg"
      leftBtnText="Order Now"
        rightBtnText='LEARN MORE' />
      <Section
        title="Accessories"
      description=""
      backgroundImage="accessories.jpg"
      leftBtnText="SHOP NOW"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
