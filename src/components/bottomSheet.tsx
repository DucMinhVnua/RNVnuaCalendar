import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';

import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../assets/styles/colors';
import {moderateScale} from 'react-native-size-matters';
import InfoBottomLine from './infoBottomLine';

import icons from '../constant/icons';
import moment from 'moment';

const BottomSheetLesson = ({
  subjects,
  index,
  isDoubleLesson,
  refRBSheet,
}: any) => {
  const refRBSheets = useRef();

  return (
    <>
      {isDoubleLesson ? (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => refRBSheets.current.open()}
          key={index}>
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
          <RBSheet
            ref={refRBSheets}
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
        </TouchableOpacity>
      ) : (
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
      )}
    </>
  );
};

export default BottomSheetLesson;

const styles = StyleSheet.create({
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
});
