import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './nearbyjobcard.style';
import { checkImageURL } from '../../../../utils';
import jobLogo from '../../../../assets/images/jobLogo.jpg';

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={
            checkImageURL(job?.employer_logo)
              ? { uri: job.employer_logo }
              : jobLogo
          }
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
