import matchers from '@testing-library/jasmine-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


beforeEach(() => {
	// Registrar los matchers de testing-library para Jasmine
	jasmine.getEnv().addMatchers(matchers);
});