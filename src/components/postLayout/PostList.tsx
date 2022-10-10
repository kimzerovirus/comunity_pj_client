import styled from '@emotion/styled';
import { Container } from '@mui/material';
import { FC, ReactNode } from 'react';
import DefaultLayout from 'src/components/common/DefaultLayout';
import { PagingProps, PostProps } from 'src/utils/staticDataUtils';

import Pagination from '../common/Pagination';
import Post from './PostItem';

interface PostListProps {
	posts: PostProps[];
	paging: PagingProps;
}

const PostList: FC<PostListProps> = ({ posts, paging }) => {
	return (
		<DefaultLayout maxWidth="md" isBorder>
			<PostListWrapper>
				{posts.map((post, index) => (
					<Post
						link={post.link}
						frontmatter={post.frontmatter}
						filename={post.filename}
						key={index}
					/>
				))}
			</PostListWrapper>
			<Pagination paging={paging} />
		</DefaultLayout>
	);
};

const PostListWrapper = styled.ul`
	list-style: none;
	padding: 0;
`;

export default PostList;
