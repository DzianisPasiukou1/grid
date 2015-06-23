angular.module('gridTaskApp')
	 .constant("checkboxSelectConstants",
	 {
	 	values: {
	 		all: { label: 'All', isAll: true },
	 		noOne: { label: 'No one', isNoOne: true },
	 		marked: { label: 'Marked', isMarked: true },
	 		notMarked: { label: 'Not marked', isNotMarked: true }
	 	}
	 });