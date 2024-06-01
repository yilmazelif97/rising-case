
import styles from '../../styles/Card.module.css'

export default function Card(props: any) {


  let title = props.title

  const getCardClass = (key: any) => {
    switch (key?.toLowerCase()) {
      case 'dailyusage':
        return 'dailyusage-card';
      case 'expiretime':
        return 'expiretime-card';
      case 'lastcharge':
        return 'lastcharge-card';
      case 'totaldatausage':
        return 'totaldatausage-card';
      default:
        return '';
    }
  };

  const getTitleClass = (key: any) => {
    switch (key?.toLowerCase()) {
      case 'dailyusage':
        return 'dailyusage-title';
      case 'expiretime':
        return 'expiretime-title';
      case 'lastcharge':
        return 'lastcharge-title';
      case 'totaldatausage':
        return 'totaldatausage-title';
      default:
        return '';
    }
  };

  const getValueClass = (key: any) => {
    switch (key?.toLowerCase()) {
      case 'dailyusage':
        return 'dailyusage-value';
      case 'expiretime':
        return 'expiretime-value';
      case 'lastcharge':
        return 'lastcharge-value';
      case 'totaldatausage':
        return 'totaldatausage-value';
      default:
        return '';
    }
  };


  const generateTitle = (key: any) => {
    switch (key?.toLowerCase()) {
      case 'dailyusage':
        return 'Daily Usage Data';
      case 'expiretime':
        return 'Subscription expires on';
      case 'lastcharge':
        return 'Last charge';
      case 'totaldatausage':
        return 'Total Usage Data';
      default:
        return '';
    }
  };

  const generateValue = (key: any) => {
    switch (key?.toLowerCase()) {
      case 'dailyusage':
        let dailyUsage = Intl.NumberFormat('tr-TR').format(props.value);
        return `${dailyUsage} GB`;
      case 'expiretime':
        return `${props.value}`;
      case 'lastcharge':
        const text = `${props.value}`;

        const splitIndex = text.indexOf("on");
        const firstPart = text.slice(0, splitIndex);
        const secondPart = text.slice(splitIndex);
        return (
          <div>
            <span>{firstPart}</span>
            <span style={{ fontSize: '16px' }}>{secondPart}</span>
          </div>
        );
      case 'totaldatausage':
        let num = Intl.NumberFormat('tr-TR').format(props.value);
        return `${num} GB`;
      default:
        return '';
    }
  };

  const cardClass = `${getCardClass(title)}`;
  const spanClass = getTitleClass(title);
  const valueClass = getValueClass(title);


  return (
    <div className={`${styles.card} ${styles[cardClass]}`}>

      <div>
        <p className={styles[spanClass]} >{generateTitle(title)}</p>
        <p className={styles[valueClass]}>{generateValue(title)}</p>
      </div>
    </div>
  );
}