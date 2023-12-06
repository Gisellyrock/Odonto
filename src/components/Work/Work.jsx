import React from 'react';
import { workExp } from '../../utils/data';
import css from './Work.module.scss';
import { motion } from 'framer-motion';
import {
  draw,
  fadeIn,
  slideIn,
  staggerChildren,
  textVariant2,
  zoomIn,
} from '../../utils/motion';
const Work = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="work"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        {/* heading */}
        <span className="primaryText yPaddings">Serviços</span>

        <div className={`flexCenter ${css.experiences}`}>
          {workExp.map((exp, i) => {
            return (
              <motion.div
                variants={textVariant2}
                key={i}
                className={`flexCenter ${css.exp}`}
              >
                <div className={css.post}>
                  <h1>{exp.place}</h1>
                  <p>{exp.tenure}</p>
                </div>
                <div className={css.role}>
                  <h1>{exp.role}</h1>
                  <p>{exp.detail}</p>
                </div>
              </motion.div>
            );
          })}

          <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
            <motion.div
              variants={fadeIn('down', 'tween', 2, 1.5)}
              className={css.line}
            ></motion.div>
            <div>
              <div
                className={css.circle}
                style={{ background: '#8ACDD7' }}
              ></div>
            </div>
            <div>
              <div
                className={css.circle}
                style={{ background: '#F9F9E0' }}
              ></div>
            </div>
            <div>
              <div
                className={css.circle}
                style={{ background: '#FF90BC' }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
