import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Details extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Header</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            {/* Your content here */}
            <Text>Content Area</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Footer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 50,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  footer: {
    height: 50,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 18,
  },
});

export default Details;