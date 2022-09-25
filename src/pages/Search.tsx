import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Container, InputAdornment, TextField } from '@mui/material';
import React from 'react';
function Search() {
	const handleSubmit = () => {
		console.log('test');
	};

	return (
		<Container component="main" maxWidth="md">
			<Box component="form" onSubmit={handleSubmit} noValidate mt={6}>
				<TextField
					margin="normal"
					placeholder="검색어를 입력해주세요"
					fullWidth
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
					}}
				/>
			</Box>
		</Container>
	);
}

export default Search;