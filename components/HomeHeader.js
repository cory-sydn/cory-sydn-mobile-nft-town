import { View, Text, Image, TextInput } from "react-native";
import { assets, COLORS, FONTS, SIZES } from "../constants";

const HomeHeader = ({ onSearch }) => {
	return (
		<View
			style={{
				backgroundColor: COLORS.primary,
				padding: SIZES.font,
			}}
		>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Image
						source={assets.logo12}
						resizeMode="contain"
						style={{ width: 100, height: 45 }}
					/>
				</View>

				<View style={{ width: 40, height: 45 }}>
					<Image
						source={assets.person01}
						resizeMode="contain"
						style={{ width: "100%", height: "100%" }}
					/>
					<Image
						source={assets.badge}
						resizeMode="contain"
						style={{
							position: "absolute",
							right: 0,
							bottom: 0,
							width: 15,
							height: 15,
						}}
					/>
				</View>
			</View>

			<View style={{ marginVertical: SIZES.font }}>
				<Text
					style={{
						fontFamily: FONTS.regular,
						fontSize: SIZES.small,
						color: COLORS.white,
					}}
				>
					Hello, Cecil 👋️
				</Text>
				<Text
					style={{
						fontFamily: FONTS.bold,
						fontSize: SIZES.large,
						color: COLORS.white,
						marginTop: SIZES.base / 2,
					}}
				>
					Let's find a masterpiece
				</Text>
			</View>

			<View style={{ marginTop: SIZES.font }}>
				<View
					style={{
						width: "100%",
						borderRadius: SIZES.font,
						backgroundColor: COLORS.gray,
						flexDirection: "row",
						paddingHorizontal: SIZES.font,
						paddingVertical: SIZES.small - 2,
					}}
				>
					<Image
						source={assets.search}
						resizeMode="contain"
						style={{ width: 20, height: 20, marginRight: SIZES.small }}
					/>
					<TextInput
						placeholder="Search NFTs"
						style={{ flex: 1 }}
						onChangeText={onSearch}
					/>
				</View>
			</View>
		</View>
	);
};

export default HomeHeader;
