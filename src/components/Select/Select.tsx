
	import styles from './Select.module.scss';
	import 'react-popper-tooltip/dist/styles.css';
	import { usePopperTooltip } from 'react-popper-tooltip';
	import { useState, useEffect } from 'react';

	interface SelectType {
		menu: string;
		city: string[];
	}

	const Select = ({menu, city}:SelectType) => {
		const [controlledVisible, setControlledVisible] = useState(false);

		const {
			getTooltipProps,
			setTooltipRef,
			setTriggerRef,
			visible,
		} = usePopperTooltip({
			trigger: 'click',
			visible: controlledVisible,
			onVisibleChange: setControlledVisible,
		});

		useEffect(() => {
			const handleKeyDown = ({ key }:any) => {
			  if (key === 'Escape') {
				 setControlledVisible(false);
			  }
			};
	  
			document.addEventListener('keydown', handleKeyDown);
	  
			return () => {
			  document.removeEventListener('keydown', handleKeyDown);
			};
		 }, []);

		return (
			<div className={styles.select}>
				<button className={styles.btn} type="button" ref={setTriggerRef}>
					{menu}
				</button>

				{visible && (
				<div
					ref={setTooltipRef}
					{...getTooltipProps({ className: 'tooltip-container' })}
					className={styles.tooltip}
				>
					{city}
				</div>
				)}
			</div>
		);
	}

	export default Select;