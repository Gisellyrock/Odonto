import React from 'react';
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';
import css from './Hero.module.scss';
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn('right', 'tween', 0.2, 1)}
          >
            <br />
            Dra Leyde Jane
          </motion.span>
          {/* <motion.span
            className="secondaryText"
            variants={fadeIn('left', 'tween', 0.4, 1)}
          >
            I design beautiful simple
            <br />
            things, And I love what i do{' '}
          </motion.span> */}
        </div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn('up', 'tween', 0.5, 1.3)}
            src="./person.png"
            alt=""
          />
        </motion.div>

        {/* <a className={css.email} href="mailto:zainkeepscode@gmail.com">
          zainkeepscode@gmail.com
        </a> */}

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn('right', 'tween', 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">15</div>
            <div className="secondaryText">
              <div>Anos de</div>
              <div>Experiência</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
