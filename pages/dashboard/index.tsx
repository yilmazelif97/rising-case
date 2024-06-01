import { useSelector } from "react-redux"
import { RootState } from "../../redux/reducers"
import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"
import { useRouter } from "next/router"
import Layout from "../../components/layout/Layout"
import Alert from "../../components/alert/Alert"
import styles from '../../styles/Dashboard.module.css'
import Link from "next/link"
import { getTableData } from "../api/getTableData"
import { getInfo } from "../api/getUserInfo"
import Chart from "../../components/chart/ChartArea"
import Card from "../../components/card/Card"
import Table from "../../components/table/Table"
import Swal from "sweetalert2"



export default function Dashboard() {

    const router = useRouter()

    const token = useSelector((state: RootState) => state.auth.token)

    const [tableSource, setTableSource] = useState<any>()
    const [userInfos, setUserInfos] = useState<any>([])

    const [alertVisible, setAlertVisible] = useState(true);

  const handleAlertClose = () => {
    setAlertVisible(false);
  };

    const getTableInfo = async () => {

        let res = await getTableData(token)
        setTableSource(res?.data)


    }

    const getUserInfo = async () => {

        let res: any = await getInfo(token)

        const mergedLastCharge = {
            ...res.data,
            lastCharge: `${res.data.lastChargeAmount} ${res.data.lastCharge}`
        };
        delete mergedLastCharge?.lastChargeAmount



        const dataArray = Object.keys(mergedLastCharge).map(key => ({
            key: key,
            value: mergedLastCharge[key]
        }));

        setUserInfos(dataArray)

    }

    useEffect(() => {

        const checkTokenExpire = async () => {

            try {
                const decodedToken = jwtDecode<{ exp: number }>(token);
                if (decodedToken.exp * 1000 < Date.now()) {
                    router.push('/signin');
                }

            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Token expired',
                    text: 'Login again please',
                  });
            }

        }

        checkTokenExpire();
        const intervalId = setInterval(checkTokenExpire, 60000)

        getTableInfo()
        getUserInfo()


    }, [token])




    return (
        <Layout>
            <div style={{ borderBottom: '1px solid #C5c6d5' }} >

                <div>
                    <div className={styles.header}>
                    {alertVisible && <Alert onClose={handleAlertClose} />}
                        <p className={styles.content}>Proxies & Scraping Infrastructure</p>

                        <div className={styles.tabMenu}>
                            <Link
                                className={`${styles.menuItem} ${router.pathname === '/proxies' ? styles.activeMenuItem : ''}`}
                                href='/proxies'
                            >
                                My Proxies
                            </Link>
                            <Link
                                className={`${styles.menuItem} ${router.pathname === '/dashboard' ? styles.activeMenuItem : ''}`}
                                href='/dashboard'
                            >
                                Dashboard
                            </Link>
                        </div>

                    </div>

                </div>


            </div>

                <div >

                    <div className={styles.card} >
                        {
                            userInfos?.map((item: any) => {
                                return (
                                    <Card title={item?.key} value={item.value} />
                                )

                            })
                        }
                    </div>
                </div>

                <div className={styles.chart}>
                    <Chart />
                </div>

                <div className={styles.table}>

                    <Table dataSource={tableSource} />


                </div>


        </Layout>
    )
}