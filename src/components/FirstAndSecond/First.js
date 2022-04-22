import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Sticky } from "../../styles/index";

export const First = () => {
  const { scrollYProgress } = useViewportScroll();

  const firstScale = useTransform(
    scrollYProgress,
    //!input
    [0.198, 0.264, 0.558, 0.627],
    //!output
    [1, 0.511, 0.511, 1]
  );

  const leftSideHeight = useTransform(
    scrollYProgress,
    //!input
    [0, 0.058],
    //!output
    ["20vh", "100vh"]
  );

  const rightSideScale = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    [0, 0.511]
  );

  const rightSideY = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    ["58vh", "0vh"]
  );

  const offsetY = useTransform(scrollYProgress, [0.328, 0.397, 0.461, 0.53], ["0%", "-100%", "-100%", "-200%"]);
  return (
    <Sticky
      className="first"
      style={{
        scale: firstScale,
      }}
    >
      <motion.div
        className="offset"
        style={{
          y: offsetY,
        }}
      >
        <div className="a">
          <motion.div
            className="left-side"
            style={{
              height: leftSideHeight,
            }}
          />
          <div className="right-side">
            <motion.div
              className="right-image"
              style={{
                y: rightSideY,
                scale: rightSideScale,
              }}
            />
          </div>
        </div>
        <div className="b"></div>
        <div className="c"></div>
      </motion.div>
    </Sticky>
  );
};
