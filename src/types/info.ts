export type Contact = {
		readonly email: string;
}

export type License = {
		readonly name: string;
		readonly url: string;
}

export type ProjectInfo = {
		readonly contact: Contact;
		readonly description: string;
		readonly license: License;
		readonly termsOfService: string; // URL
		readonly title: string;
		readonly version: string; // Semver
}