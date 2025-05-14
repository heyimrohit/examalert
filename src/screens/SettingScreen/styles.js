import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 50,
  },
  header: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical : 10
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userInfo: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
  },
  bio: {
    fontSize: 14,
    color: '#777',
  },
  card: {
    paddingHorizontal: 12,
    backgroundColor: '#f9fafc',
    borderRadius: 16,
    paddingVertical: 4,
    marginBottom: 16,
  },
  menuItem: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
},
  iconWrapper: {
    width: 32,
    height: 32,
    backgroundColor: '#ffff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    width: 20,
    height: 20,
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
  arrow: {
    width: 12,
    height: 12,
    tintColor: '#ccc',
  },
});
