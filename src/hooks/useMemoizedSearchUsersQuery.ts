import { useMemo } from 'react';
import { useSearchUsersQuery } from '../store/github/github.api'

export function useMemoizedSearchUsersQuery(debounced: string) {
	const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
		skip: debounced.length < 3,
		refetchOnFocus: true
	});

	const memoizedResult = useMemo(() => {
		return { isLoading, isError, data };
	}, [isLoading, isError, data]);

	return memoizedResult;
}