import './App.css';
import './fonts.css';
import { Flex, Text, Image, Box, Spacer } from "@chakra-ui/react";
import React, { useState } from 'react';
import PicnicItem from './picnicButton';
import { ReactTyped } from 'react-typed';

function App() {
  const [hoverText, setHoveredText] = useState({ title: "", body: "" });

  return (
    <Flex overflowY="auto" direction="column" bgColor={'black'} alignItems={'center'}>
      <Flex
        bgImage="url('./cloudBackground.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height="2239px"
        width="1280px" // Or a specific height for your container
        overflowY="auto"
        direction="column"
        alignItems="center"
        position="relative">
        <Image src="./JasminYuName.png" width="1067px" height="285px" />
        <Flex direction="column" alignItems="center" mt="50px">
          <Flex direction="row" alignItems="center" width="500px" flexWrap={"nowrap"} gap={2}>
            <Text textStyle="bodyText">A MULTIDISCIPLINARY </Text>
            <div className='Typewriter-element'>
              <ReactTyped
                strings={[
                  'DESIGNER',
                  'MARKETER',
                  'RESEARCHER'
                ]}
                typeSpeed={40}
                backSpeed={50}
                style={{fontFamily: "TransSansMedium", fontSize: "30px", color: "#0C5B93"}}
                loop
              />
            </div>
          </Flex>
          <Text textStyle="bodyText"> PASSIONATE ABOUT BUILDING <Text as="span" textStyle="emphasisText">Memorable</Text></Text>
          <Text textStyle="bodyText"><Text as="span" textStyle="emphasisText">Detail-Oriented</Text> EXPERIENCES THAT DRIVE</Text>

          <Flex alignItems="center" gap="2" mt="-6">
            <Text textStyle="bodyText">CONNECTION</Text>
            <Text textStyle="ampersandTitle"> & </Text>
            <Text textStyle="bodyText">BRAND GROWTH</Text>
          </Flex>

          <Text textStyle="subText" mt="100px">SCROLL <Text as="span" textStyle="ampersandTitle" fontSize="36px">&</Text> <Text as="span" textStyle="subEmphasis"> Learn More About My Process</Text></Text>
        </Flex>

        <Flex direction="row" alignItems="center" mt='175px' gap="10px">
          <Text textStyle="emphasisText" fontSize="36px">CURIOSITY - LED</Text>
          <Text textStyle="ampersandTitle" fontSize="75px">&</Text>
          <Text textStyle="emphasisText" fontSize="36px">DETAIL - DRIVEN</Text>
          <Text textStyle="ampersandTitle" fontSize="75px">&</Text>
          <Text textStyle="emphasisText" fontSize="36px">COMMUNITY - FOCUSED</Text>
        </Flex>

        <Flex direction="row" alignItems="center" gap="120" mt="125px">
          <Flex direction="column" alignItems="center">
            <Text textStyle="smallBody">WITH A BACKGROUND SPANNING IN</Text>
            <Text textStyle="smallEmphasis">Branding, Interaction Design, <Text as="span" textStyle="smallBody"> AND </Text></Text>
            <Text textStyle="smallBody"><Text as="span" textStyle="smallEmphasis">Creative Production, </Text> I APPROACH</Text>
            <Text textStyle="smallBody">EACH PROJECT AS AN OPPORTUNITY TO</Text>
            <Text textStyle="smallBody">BALANCE PLAY & PRECISION</Text>
          </Flex>

          <Flex direction="column" alignItems="center">
            <Text textStyle="smallBody">EACH PROJECT BEGINS WITH</Text>
            <Text textStyle="smallBody"><Text as="span" textStyle="smallEmphasis">Understanding</Text> PEOPLE, CONTEXT, AND</Text>
            <Text textStyle="smallBody">POTENTIAL. I BELIEVE IN APPROACHING</Text>
            <Text textStyle="smallBody">DESIGN WITH <Text as="span" textStyle="smallEmphasis">Adaptability, Clarity,</Text></Text>
            <Text textStyle="smallBody" mt="-5px"> AND A COMMITMENT TO THOUGHTFUL <Text as="Span" textStyle="ampersandTitle" fontSize="25px">&</Text> </Text>
            <Text textStyle="smallBody"> EFFECTIVE SOLUTIONS </Text>
          </Flex>

          <Flex direction="column" alignItems="center">
            <Text textStyle="smallBody">To me good design is a shared</Text>
            <Text textStyle="smallBody">experience-- one that's layered</Text>
            <Text textStyle="smallEmphasis">INTENTIONAL, <Text as="span" textStyle={"smallBody"}>and</Text> DEEPLY</Text>
            <Text textStyle="smallEmphasis">COLLABORATIVE. <Text as="span" textStyle={"smallBody"}>I work like I host: </Text></Text>
            <Text textStyle="smallBody"> with care, curiosity, and a respect for </Text>
            <Text textStyle="smallBody"> every voice at the table </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        bgGradient="linear(to-b, #E3F4FD, #FFF9EC)"
        p={4}
        color="white"
        textAlign="center"
        width="1280px"
        height="154px"
        mt="-700px"
        position="relative">
      </Flex>

      <Flex
        bgImage="url('./forestBackground.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height="1636.8px"
        width="1280px" // Or a specific height for your container
        direction="column"
        alignItems={"center"}
        position="relative"
      >
        <Text textStyle="subText">WHAT I BRING TO THE TABLE</Text>

        <Flex width="472px" flexWrap="wrap" alignItems={"center"}>
          <Text textStyle="subEmphasis" fontSize="30px" lineHeight="1.25" textAlign="center" mt="20">
            A creative spread of strengths I bring into every project.
          </Text>
        </Flex>

        <Text fontFamily={"Morion"} fontSize={"25px"} lineHeight={"1.25"} color="#0C5B93" mt="100px">
          Like a beautifully arranged picnic
        </Text>
        <Flex alignItems="center" direction="column" gap="-10">
          <Text color="#0C5B93"> | </Text>
          <Text color="#0C5B93"> | </Text>
          <Text color="#0C5B93"> ↓ </Text>
        </Flex>

        <Flex
          bgImage="url('./picnicBlanket.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          height="860px"
          width="1370px"
          mt="400px"
          ml="-100px">

          <Flex position="absolute" width="280px" height="138px" top="750px" left="925px" direction="column">
            <Text textStyle={"subEmphasis"} lineHeight={"1.25"}>
              {hoverText.title}
            </Text>
            <Text textStyle={"subEmphasis"} fontSize={"15px"} lineHeight={"1.25"}>
              {hoverText.body}
            </Text>
          </Flex>

          <Flex position="absolute" top="1200px" left="375px">
            <PicnicItem
              hoverTitle="Bright, Balanced & Versatile"
              hoverBody="FRESH IDEAS MEET FUNCTIONAL DESIGN. I BRING RANGE—MOVING FLUIDLY ACROSS BRAND, UX, AND CONTENT WITH A FOCUS ON CLARITY, FLOW, AND USER EXPERIENCE."
              image="./fruit.png"
              width="276px"
              height="211px"
              setHoverText={setHoveredText}
            />
          </Flex>


          <Flex position="absolute" top="1025px" left="140px">
            <PicnicItem
              hoverTitle="Compact & Cohesive"
              hoverBody="PACKED WITH PERSONALITY & PURPOSE. I DEVELOP BRAND IDENTITIES THAT ARE DISTINCT, CONSISTENT, AND BUILT TO SCALE—GROUNDED IN STRONG VISUAL SYSTEMS & EDITORIAL ALIGNMENT."
              image="./musubi spread.png"
              width="952px"
              height="188px"
              setHoverText={setHoveredText}
            />
          </Flex>

          <Flex position="absolute" top="975px" left="800px">
            <PicnicItem
              hoverTitle="Crisp & Adaptive"
              hoverBody="CRAFTED FROM WHAT\'S AVAILABLE & ALWAYS SATISFYING. I PROBLEM-SOLVE QUICKLY, ITERATE EFFICIENTLY, AND BUILD SMART SOLUTIONS EVEN IN CONSTRAINT HEAVY ENVIRONMENTS."
              image="./scallion pancake.png"
              width="348px"
              height="158px"
              setHoverText={setHoveredText}
            />
          </Flex>

          <Flex position="absolute" top="925px" left="400px">
            <PicnicItem
              hoverTitle="Lively, Tuned-in & Communicative"
              hoverBody="GOOD VIBES & CLEAR SIGNALS. I COLLABORATE WITH INTENSION, ADAPT TO THE RHYTHM OF A TEAM, AND BRING CREATIVE DIRECTION THAT/'S WELL-ALIGNED."
              image="./speaker.png"
              width="199px"
              height="110px"
              setHoverText={setHoveredText}
            />
          </Flex>

          <Flex position="absolute" top="1000px" left="550px">
            <PicnicItem
              hoverTitle="Layered and Polished"
              hoverBody="EVERY ELEMENT IS INTENTIONAL. FROM HIERARCHY TO HOVER STATES, I DESIGN WITH CARE—BALANCING PLAYFUL VISUALS WITH STRUCTURE & CLEAN EXECUTION."
              image="./strawberry cake.png"
              width="252px"
              height="275px"
              setHoverText={setHoveredText}
            />
          </Flex>

          <Flex position="absolute" top="1150px" left="200px">
            <Image
              src="./plateAndFork.png"
              width="178px"
              height="128px"
            />
          </Flex>
          <Flex position="absolute" top="1225px" left="725px">
            <Image
              src="./stackedPlates.png"
              width="183px"
              height="140px"
            />
          </Flex>
        </Flex>
      </Flex>

      <Flex
        bgGradient="linear(to-b, rgba(227, 244, 253, 0), #FFF9EC)"
        p={4}
        color="white"
        textAlign="center"
        width="1280px"
        height="154px"
        mt="-150px"
        position="relative">
      </Flex>

      <Flex
        bgColor="#FFF9EC"
        p={4}
        color="white"
        textAlign="center"
        width="1280px"
        height="312px"
        position="relative">
      </Flex>
    </Flex>
  );
}

export default App;
