import { useState } from 'react';
import styles from '../../styles/Table.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';



export default function Table(props: any) {

    const [openDropdowns, setOpenDropdowns] = useState<any>({});

    const toggleDropdown = (index: any) => {
        setOpenDropdowns((prevState: any) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    let dataSource = props.dataSource?.data


    const formatDate = (inputDate: any) => {
        const dateOptions: any = { day: '2-digit', month: 'short', year: 'numeric' };
        const formattedDate = new Date(inputDate).toLocaleDateString('en-GB', dateOptions);
        return formattedDate
    };

    const handleMouseEnter = (index: any) => {
        setOpenDropdowns((prevState: any) => ({
            ...prevState,
            [index]: true
        }));
    };

    const handleMouseLeave = (index: any) => {
        setOpenDropdowns((prevState: any) => ({
            ...prevState,
            [index]: false
        }));
    };



    return (
        <div className={styles['table-container']}>
            <h2 style={{ fontWeight: '600', fontSize: '20px', lineHeight: '24px' }} >Transactions History</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Location</th>
                        <th>Rental Period</th>
                        <th>Number of IP</th>
                        <th>SpesificPurpose</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dataSource?.map((row: any, index: any) => (
                        <tr key={index}>
                            <td>{row?.type}</td>
                            <td>{row?.location}</td>

                            <td>{row?.rental}</td>
                            <td  >{row?.ipcount}</td>
                            <td>{row?.purpose}</td>

                            <td>{formatDate(row?.date)}</td>

                            <td>
                                <div
                                    className={`${styles.dropdown} ${openDropdowns[index] ? 'open' : ''}`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                >
                                    <button onClick={() => toggleDropdown(index)}>
                                        Actions
                                        <FontAwesomeIcon icon={openDropdowns[index] ? faChevronUp : faChevronDown} style={{ marginLeft: '5px' }} />
                                    </button>
                                    <div className={styles['dropdown-content']}>
                                        <a onClick={() => { console.log('Number of IP', row?.ipcount) }} href="#">Processing</a>
                                        <a onClick={() => { console.log('Number of IP', row?.ipcount) }} href="#">In Progress</a>
                                        <a onClick={() => { console.log('Number of IP', row?.ipcount) }} href="#">Completed</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}