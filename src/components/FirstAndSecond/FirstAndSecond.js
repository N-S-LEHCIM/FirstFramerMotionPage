import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Sticky } from "../../styles/index";
import { First } from "./First";

const FirstAndSecond = () => {
  const { scrollYProgress } = useViewportScroll();

  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1]);

  const frameScale = useTransform(
    scrollYProgress,
    [0.558, 0.627],
    [0.511, 0.8]
  ); //!O QUANDOR COMEZA PEQUENO E TERMINA GRANDE E FICA INVISIVEL E DEPOIS FICA FISIVEL

  return (
    <Sticky className="second">
      <First />
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          borderRadius: "4px",
          border: "4px solid #fff",
          opacity: frameOpacity,
          scale: frameScale,
        }}
      />
    </Sticky>
  );
};

export default FirstAndSecond;
