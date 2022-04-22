import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled.main`
  .first {
    background: red;
    overflow: hidden;

    .offset {
      width: 100 %;
      height: 100%;
    }

    .a {
      background: rgb(213, 28, 250);
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        width: 50%;
        height: 100%;
        background: #7dbb91;
      }
      .right-side {
        width: 50%;
        height: 100%;

        .right-image {
          background-color: aquamarine;
          width: 100 %;
          height: 100%;
        }
      }
    }
    .b {
      background: rgb(137, 28, 232);
      width: 100 %;
      height: 100%;
    }
    .c {
      background: rgb(90, 48, 241);
      width: 100 %;
      height: 100%;
    }
  }

  .second {
    background: rgb(187, 234, 47);
  }
  .third {
    background: rgb(0, 255, 195);
  }
  .fourth {
    background: rgb(0, 170, 255);
  }
`;

export const Section = styled.div`
  position: relative;
`;

export const Sticky = styled(motion.div)`
  position: sticky;
  height: 100vh;
  left: 0;
  right: 0;
  top: 0;
`;
