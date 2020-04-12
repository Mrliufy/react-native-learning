import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleWraper: {
    marginTop: 40,
    paddingBottom: 30,
    paddingLeft: 30,
    borderBottomWidth: 1.5,
    borderBottomColor: 'rgb(21, 140, 192)',
  },
  titleText: {
    fontWeight: '600',
    fontSize: 26,
    color: 'rgb(21, 140, 192)',
  },
  itemListContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(219, 219, 219)',
  },
  itemListContainerLast: {
    borderBottomWidth: 0,
    paddingBottom: 40,
  },
  itemTitle: {
    paddingBottom: 25,
    color: '#666666',
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemMargin: {
    marginTop: 20,
  },
  iconText: {
    marginLeft: 30,
    color: '#000',
  },
});
