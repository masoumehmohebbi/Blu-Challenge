import styles from "./aboutUs.module.css";
const AboutUs = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        پروژه ثبت تسهیلات بانکی هست که با تکنولوژی های زیر توسعه داده شده است:
      </p>
      <img src="/Blue-Challenge-App.PNG" alt="MindMap-Blue-Challenge-App" />
    </div>
  );
};

export default AboutUs;
