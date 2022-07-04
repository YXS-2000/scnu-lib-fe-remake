import { useRecoilValue } from 'recoil';
import {activityDetail} from '../../store';
import { Typography, Tag, Space } from '@douyinfe/semi-ui';
import styles from './index.module.scss';
import { TagColor } from '@douyinfe/semi-ui/lib/es/tag';


export default function ActivityDetail() {
  const relevantDetail = useRecoilValue(activityDetail);
  const { Title, Text } = Typography;
  const {title, start_date, end_date, img, description, max_num_of_people, register_date,
    num_of_people, spot, tags, hosts, is_allow_volunteer, max_num_of_volunteer, num_of_volunteer} = relevantDetail;

  return <div className={styles.activityDetail}>
    <div className={styles.activityImgContainer}>
      <img src={img} className= {styles.activityImg}/>
    </div>
    <div className={styles.detailText}>
      <Title heading={1}>{title}</Title>
      <Text type='quaternary' strong className={styles.description}>{description}</Text>
      <br/>
      <Space vertical align='start'> 
        <Space>
          {
            tags.map(tag => (
              <Tag key={tag.name} color={tag.color as TagColor}>{tag.name}</Tag>
            ))
          }
        </Space>
        <Space vertical align='start' className={styles.underpart}>
          <Text >负责人：{hosts[0]}{' '} </Text>
          <Text >报名人数：{num_of_people} / {max_num_of_people} </Text>
          {is_allow_volunteer ? <Text >志愿者人数：{num_of_volunteer} / {max_num_of_volunteer} </Text> : {}} 
          <Text >地点：{spot}{' '}</Text>
          <Text >报名截止时间：{register_date}{' '}</Text>
          <Text >活动时间：{start_date} ~ {end_date}</Text>
        </Space>
      </Space>

    </div>

  </div>;
}
