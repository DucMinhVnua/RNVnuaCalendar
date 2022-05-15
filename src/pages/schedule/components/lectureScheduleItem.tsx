import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';

import {moderateScale} from 'react-native-size-matters';
import colors from '../../../assets/styles/colors';
import typos from '../../../assets/styles/textStyles';
import icons from '../../../constant/icons';
import InfoBottomLine from '../../../components/infoBottomLine';
import moment from 'moment';
// import BottomSheet from '@gorhom/bottom-sheet';
import RBSheet from 'react-native-raw-bottom-sheet';

const LectureScheduleItem = ({item, index, indexBtnActive}: any) => {
  // const bottomSheetRef = useRef<BottomSheet>(null);
  const refRBSheet = useRef();

  const [subject, setSubject] = useState(null);

  function handleOnPress() {
    // setSubject(subject);
    // bottomSheetRef.current?.snapToIndex(1);
    refRBSheet.current.open();
  }

  function renderBottomSheet(subjects: any) {
    return (
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,.6)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <ScrollView>
          <TouchableOpacity activeOpacity={1}>
            <InfoBottomLine
              nameInfo={subjects.code}
              Icon={<icons.PlayIcon />}
              label={'Mã môn học'}
            />
            <InfoBottomLine
              nameInfo={subjects.nameSubject}
              Icon={<icons.BookGrayIcon />}
              label={'Tên môn học'}
            />
            <InfoBottomLine
              nameInfo={subjects.room}
              Icon={<icons.RoomScheduleIcon />}
              label={'Phòng học'}
            />
            <InfoBottomLine
              nameInfo={subjects.numberCredit}
              Icon={<icons.CreditIcon />}
              label={'Số tín chỉ'}
            />
            <InfoBottomLine
              nameInfo={`${moment(subjects.dateLearn[0].date).format(
                'DD/MM/YYYY',
              )} -> ${moment(
                subjects.dateLearn[subjects.dateLearn.length - 1].date,
              ).format('DD/MM/YYYY')}`}
              Icon={<icons.DateLearnIcon />}
              label={'Tuần học'}
            />
          </TouchableOpacity>
        </ScrollView>
      </RBSheet>
    );
  }

  // trường hợp nhiều môn học trong 1 tiết
  if (item.length > 1) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleOnPress}
        style={styles.containerItem}>
        <View style={styles.wrapperLeft}>
          <Text style={styles.lesson}>
            Tiết {indexBtnActive === 0 ? index + 1 : index + 6}
          </Text>
        </View>
        <View style={{flexGrow: 1}}>
          {item.map((subjects: any, index: any) => (
            <React.Fragment key={index}>
              <View style={[styles.wrapperRight, {marginBottom: 5}]}>
                <View style={styles.wrapperInfo}>
                  <icons.BookGrayIcon />
                  <Text style={styles.content}>{subjects.nameSubject}</Text>
                </View>
                <View style={styles.wrapperInfo}>
                  <icons.RoomScheduleIcon />
                  <Text style={styles.content}>{subjects.room}</Text>
                </View>
              </View>
              {renderBottomSheet(subjects)}
            </React.Fragment>
          ))}
        </View>
        <View style={styles.circle}></View>
      </TouchableOpacity>
    );
  }

  return (
    <>
      {item.map((subjects: any, indexItem: any) => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => refRBSheet.current.open()}
          style={styles.containerItem}
          key={indexItem}>
          <View style={styles.wrapperLeft}>
            <Text style={styles.lesson}>
              Tiết {indexBtnActive === 0 ? index + 1 : index + 6}
            </Text>
          </View>
          <View style={styles.wrapperRight}>
            <View style={styles.wrapperInfo}>
              <icons.BookGrayIcon />
              <Text style={styles.content}>{subjects.nameSubject}</Text>
            </View>
            <View style={styles.wrapperInfo}>
              <icons.RoomScheduleIcon />
              <Text style={styles.content}>{subjects.room}</Text>
            </View>
          </View>
          <View style={styles.circle}></View>
          {renderBottomSheet(subjects)}
        </TouchableOpacity>
      ))}
    </>
  );
};

export default LectureScheduleItem;

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.border,
    paddingHorizontal: moderateScale(16),
    paddingBottom: moderateScale(20),
  },
  wrapperLeft: {
    paddingRight: moderateScale(30),
    minWidth: moderateScale(80),
  },
  lesson: {
    ...typos.titleSmall,
  },
  wrapperRight: {
    flexGrow: 1,
    backgroundColor: colors.white,
    padding: moderateScale(16),

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  wrapperInfo: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    paddingLeft: moderateScale(10),
  },
  circle: {
    width: moderateScale(10),
    height: moderateScale(10),
    backgroundColor: colors.colorFull11,
    borderRadius: 50,
    position: 'absolute',
    left: moderateScale(-5),
  },
});
