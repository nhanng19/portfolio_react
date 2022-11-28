import styles from "./Logo.module.css"

const Logo = () => {
    return (
      <svg
        id="logo"
        className={styles.logo}
        width="253"
        height="262"
        viewBox="0 0 253 262"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <linearGradient id="gradient">
          <stop offset="5%" stopColor="#000000" />
          <stop offset="95%" stopColor="#2d3436" />
        </linearGradient>
        <path
          id="path"
          d="M250.68 261.5H251.569L251.107 260.74L93.4897 1.56051L93.3436 1.32031H93.0625H1.85156H0.964011L1.42393 2.07941L158.455 261.259L158.601 261.5H158.883H250.68ZM1.35156 261V261.5H1.85156H77.0469H77.5469V261V149.672V149.531L77.4737 149.411L2.27839 26.1693L1.35156 24.6502V26.4297V261ZM251.18 1.82031V1.32031H250.68H175.484H174.984V1.82031V112.562V112.702L175.057 112.822L250.252 236.65L251.18 238.177V236.391V1.82031Z"
          stroke="white"
          strokeWidth= "0.5"
        />
      </svg>
    );
}

export default Logo;