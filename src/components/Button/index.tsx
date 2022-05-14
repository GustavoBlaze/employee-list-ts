import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  // handleAddUser: () => void;
}

// export function Button({ title, handleAddUser }: ButtonProps) {
export function Button({ title, ...rest }: ButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonCard}
        {...rest}>
        {/* // onPress={handleAddUser}> */}
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  buttonCard: {
    width: '100%',
    padding: 20,
    fontSize: 20,
    height: 56,
    backgroundColor: '#ff872c',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    color: '#fff',
    fontWeight: 'bold'
  }
})